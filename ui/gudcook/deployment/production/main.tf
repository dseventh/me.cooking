# Terraform deploy script to deploy S3 and Cloud Front for the production environment.
# Supply the access keys and secret keys for the prod environment here.
module "production-gudcook" {
  source = "../modules"
  access_key = ""
  secret_key = ""
  region = "us-west-2"
  route53_hosted_zone_id = "Z00405863V44CUC503UDH"
  environment = "production"
  acm_certificate_arn = "arn:aws:acm:us-east-1:563730542677:certificate/da954bc8-2dad-4fbc-93d1-24cdbb6888a3"
  r53_dns_name = "ui.gudcook.me"
  cf_cname = "ui.gudcook.me"
}

output "production-cloudfront_domain_name" {
  value = "${module.production-gudcook.cloudfront_domain_name}"
}

output "cloudfront_id" {
  value = "${module.production-gudcook.cloudfront_id}"
}

output "route53_fqdn" {
  value = "${module.production-gudcook.route53_fqdn}"
}

terraform {
  backend "s3" {
    bucket  = "gudcook-s3-production-tf-state"
    key     = "gudcook/production/terraform-gudcook.tfstate"
    region  = "us-west-2"
  }
}
