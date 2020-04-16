# New resource for the Cloud Front CDN distribution for the S3 buckets static website content.
resource "aws_cloudfront_distribution" "gudcook-gudcook-distro" {
  "default_cache_behavior" {
    allowed_methods = ["HEAD", "GET", "OPTIONS"]
    cached_methods = ["HEAD", "GET", "OPTIONS"]
    # Set default ttl for the objects in the cache to 3600 sec i.e 1 minute.
    default_ttl = 3600
    "forwarded_values" {
      "cookies" {
        forward = "none"
      }
      query_string = false
    }
    max_ttl = 864000
    min_ttl = 0

    # Specify the origin from where Cloud Front should fetch when the request matches the path pattern for cache
    # behavior.
    target_origin_id = "${aws_s3_bucket.gudcook-s3.id}"
    viewer_protocol_policy = "redirect-to-https"
  }


  enabled = true
  default_root_object = "index.html"
  custom_error_response = [{
    response_code = 200
    error_code = 404
    response_page_path = "/404.html"
  },{
    response_code = 200
    error_code = 403
    response_page_path = "/index.html"
  }]

  http_version = "http2"

  "origin" {
    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.gudcook_origin_access_identity.cloudfront_access_identity_path}"
    }
    # Specify DNS name of the S3 bucket.
    domain_name = "${aws_s3_bucket.gudcook-s3.bucket_domain_name}"
    # Origin identifier i.e. S3 bucket.
    origin_id = "${aws_s3_bucket.gudcook-s3.id}"
  }

  "restrictions" {
    "geo_restriction" {
      restriction_type = "none"
    }
  }

  price_class = "PriceClass_100"

  aliases = ["${var.cf_cname}"]

  "viewer_certificate" {
    cloudfront_default_certificate = "${var.cf_default_certificated}"
    acm_certificate_arn = "${var.acm_certificate_arn}"
    ssl_support_method = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }

  tags {
    Environment = "gudcook-${var.environment}"
  }
}

resource "aws_cloudfront_origin_access_identity" "gudcook_origin_access_identity" {
  comment = "gudcook access identity"
}

output "cloudfront_domain_name" {
  value = "${aws_cloudfront_distribution.gudcook-gudcook-distro.domain_name}"
}

output "cloudfront_id" {
  value = "${aws_cloudfront_distribution.gudcook-gudcook-distro.id}"
}
