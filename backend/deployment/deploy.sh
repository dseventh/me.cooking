set -e


valid=yes
check_valid() {
    if [ -z "$1" ]; then
        echo "$2"
        valid=no
    fi
}

environment=dev
s3_location=
stack_name=
region=
aws_account=
build_directory=`mktemp -d 2>/dev/null || mktemp -d -t 'dukaan'`

dos2unix deploy.config
dos2unix deploy.properties
cp deploy.config $build_directory
cp deploy.properties $build_directory
cp ../swagger.yaml $build_directory
cp ../template.yaml $build_directory
cp ../package.json $build_directory
cp ../package-lock.json $build_directory
cp -pRf ../src $build_directory

pushd $build_directory

CONFIG_FILE=deploy.config
function prop {
    if [ ! -z "environment" ]
      then
        PROP_KEY=$1
        PROP_VALUE=`cat $CONFIG_FILE | grep "$PROP_KEY" | cut -d'=' -f2`
        echo $PROP_VALUE
      else
        echo ""
    fi
}

if [ -z "${s3_location}" ]; then
    s3_location=$(prop 'S3_BUCKET')
fi
if [ -z "${stack_name}" ]; then
    stack_name=$(prop 'STACK_NAME')
fi
if [ -z "${region}" ]; then
    region=$(prop 'REGION')
fi
if [ -z "${aws_account}" ]; then
    aws_account=$(prop 'AWS_ACCOUNT')
fi

check_valid "${stack_name}"  "stack name not specified"
check_valid "${s3_location}"  "s3 bucket not specified"
check_valid "${region}"  "region not specified"
check_valid "${aws_account}"  "region not specified"

if [ "${valid}" = "no" ];then
    usage
    popd
    exit 1
fi


STATUS=`aws s3 ls | awk -F ' ' '{print $3}' | grep -Fx ${s3_location} | wc -l | tr -d '[:space:]'`
if [[ "${STATUS}" == 1 ]]; then
        echo "Bucket ${s3_location}  exists. Using it for deployment"
else
    echo "Creating S3 bucket"
    if aws s3 mb s3://${s3_location}; then
        echo "Bucket ${s3_location} created successfully"
    else
        echo "Failed creating bucket ${s3_location}"
        popd
        exit 1
    fi
fi


cp swagger.yaml swagger-deploy.yaml

sed -i -e "s|{{AWS_ACCOUNT_ID}}|${aws_account}|g" swagger-deploy.yaml
sed -i -e "s|{{AWS_REGION}}|${region}|g" swagger-deploy.yaml
sed -i -e "s|{{STACK_NAME}}|${stack_name}|g" swagger-deploy.yaml
sed -i -e "s|{{STAGE}}|${environment}|g" deploy.properties

PARAMS=($(jq -r '.Parameters[] | [.ParameterKey, .ParameterValue] | "\(.[0])=\(.[1])"' deploy.properties))

if aws cloudformation package \
        --region ${region} \
        --template-file template.yaml \
        --output-template-file template-deploy.yaml \
        --s3-bucket ${s3_location}; then
    echo "CloudFormation successfully created the package template-deploy.yaml"
else
    echo "Failed creating CloudFormation package"
    popd 
    exit 1
fi

echo "Deploying cloudformation package"

if aws cloudformation deploy \
        --region ${region} \
        --template-file template-deploy.yaml \
        --stack-name ${stack_name} \
        --parameter-overrides ${PARAMS[@]} \
        --capabilities CAPABILITY_IAM; then
    echo "CloudFormation successfully deployed the serverless app package"
else
    echo "Failed deploying CloudFormation package"
    popd
    exit 1
fi
popd
rm -rf $build_directory
