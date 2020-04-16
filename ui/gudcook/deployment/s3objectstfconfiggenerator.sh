SRC="../dist/gudcook"
TF_FILE="modules/gudcook-s3-objects.tf"
COUNT=0

cat > $TF_FILE ''

# For each file in the root directory, generate the terraform s3 object config and set content type of the file.
find $SRC -iname '*.*' | while read path; do

    case "$path" in
        *3rdpartylicenses*) ;;
        *)
            echo "Generating config for path $path"
            NAME=`echo "$path" | tr /. _`
            echo "Resource Name: $NAME"
            cat >> $TF_FILE << EOM

            resource "aws_s3_bucket_object" "$NAME" {
              bucket = "\${aws_s3_bucket.gudcook-s3.id}"
              key = "${path#$SRC}"
              source = "..//$path"
              content_type = "\${lookup(var.mime_types, "${path##*.}")}"
              etag = "\${md5(file("..//$path"))}"
            }
EOM
            ;;
    esac
    COUNT=$(expr $COUNT + 1)
done
