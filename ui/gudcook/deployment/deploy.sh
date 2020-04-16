mkdir "./production/output"
TERRAFORM_OUTFILE="${PWD}/production/output/terraform.log"
./s3objectstfconfiggenerator.sh

# Deploy
echo "Deploying to AWS"
cd production
# Initialize terraform, plan and apply the changes.
terraform init | tee $TERRAFORM_OUTFILE
terraform plan | tee -a $TERRAFORM_OUTFILE
terraform apply -auto-approve | tee -a $TERRAFORM_OUTFILE
cd ..

