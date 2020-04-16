variable "access_key" {}
variable "secret_key" {}
variable "region" {}

variable "cf_default_certificated" {
  default = false
}

variable "mime_types" {
  type = "map"
  default = {
    htm = "text/html"
    html = "text/html"
    css = "text/css"
    js = "application/javascript"
    map = "application/javascript"
    json = "application/json"
    ttf = "font/ttf"
    svg = "image/svg+xml"
    woff = "font/woff"
    woff2 = "font/woff2"
    eot = "application/vnd.ms-fontobject"
    jpg = "mage/jpeg"
    ico = "image/x-icon"
    png = "image/png"
    gif = "image/gif"
    md = "text/html"
    scss = "text/css"
  }
}

variable "acm_certificate_arn" {
  default = ""
}

variable "bucket_subdomain" {
  default = "gudcook"
}

variable "environment" {}

variable "route53_hosted_zone_id" {}


variable "r53_dns_name" {
  default = ""
}

variable "cf_cname" {
  default = ""
}
