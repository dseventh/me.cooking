# Set the provider i.e. AWS and set the access key, secret key and region from the terraform.tfvars file.
provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

# Create a S3 bucket to host the single sign on web content.
resource "aws_s3_bucket" "gudcook-s3" {
  bucket = "${var.bucket_subdomain}-${var.environment}-${var.r53_dns_name}"
  acl = "private"

  tags {
    Name = "gudcook-${var.environment}"
  }

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket_policy" "gudcook-gudcook-bucket-policy" {
  bucket = "${aws_s3_bucket.gudcook-s3.id}"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AddPerm",
      "Effect": "Allow",
      "Principal": {
          "AWS": "${aws_cloudfront_origin_access_identity.gudcook_origin_access_identity.iam_arn}"
      },
      "Action":"s3:GetObject",
      "Resource": "arn:aws:s3:::${var.bucket_subdomain}-${var.environment}-${var.r53_dns_name}/*"
    }
  ]
}
POLICY
}
