# Terraform infrastructure to create a record set in an existing Route 53 domain.
resource "aws_route53_record" "www-gudcook" {
  zone_id = "${var.route53_hosted_zone_id}"
  name    = "${var.r53_dns_name}"
  type    = "A"

  alias {
    evaluate_target_health = false
    name = "${aws_cloudfront_distribution.gudcook-gudcook-distro.domain_name}"
    zone_id = "${aws_cloudfront_distribution.gudcook-gudcook-distro.hosted_zone_id}"
  }
}

output "route53_fqdn" {
  value = "${aws_route53_record.www-gudcook.fqdn}"
}
