
            resource "aws_s3_bucket_object" "___dist_gudcook_main-es2015_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/main-es2015.js"
              source = "..//../dist/gudcook/main-es2015.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/main-es2015.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_runtime-es2015_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/runtime-es2015.js"
              source = "..//../dist/gudcook/runtime-es2015.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/runtime-es2015.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_fontawesome-webfont_svg" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/fontawesome-webfont.svg"
              source = "..//../dist/gudcook/fontawesome-webfont.svg"
              content_type = "${lookup(var.mime_types, "svg")}"
              etag = "${md5(file("..//../dist/gudcook/fontawesome-webfont.svg"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_vendor-es5_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/vendor-es5.js"
              source = "..//../dist/gudcook/vendor-es5.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/vendor-es5.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_favicon_ico" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/favicon.ico"
              source = "..//../dist/gudcook/favicon.ico"
              content_type = "${lookup(var.mime_types, "ico")}"
              etag = "${md5(file("..//../dist/gudcook/favicon.ico"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_styles-es2015_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/styles-es2015.js.map"
              source = "..//../dist/gudcook/styles-es2015.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/styles-es2015.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_index_html" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/index.html"
              source = "..//../dist/gudcook/index.html"
              content_type = "${lookup(var.mime_types, "html")}"
              etag = "${md5(file("..//../dist/gudcook/index.html"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_vendor-es2015_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/vendor-es2015.js"
              source = "..//../dist/gudcook/vendor-es2015.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/vendor-es2015.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_styles-es5_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/styles-es5.js.map"
              source = "..//../dist/gudcook/styles-es5.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/styles-es5.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_runtime-es5_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/runtime-es5.js"
              source = "..//../dist/gudcook/runtime-es5.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/runtime-es5.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_styles-es2015_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/styles-es2015.js"
              source = "..//../dist/gudcook/styles-es2015.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/styles-es2015.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_polyfills-es2015_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/polyfills-es2015.js.map"
              source = "..//../dist/gudcook/polyfills-es2015.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/polyfills-es2015.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_main-es2015_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/main-es2015.js.map"
              source = "..//../dist/gudcook/main-es2015.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/main-es2015.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_polyfills-es2015_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/polyfills-es2015.js"
              source = "..//../dist/gudcook/polyfills-es2015.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/polyfills-es2015.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_fontawesome-webfont_woff2" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/fontawesome-webfont.woff2"
              source = "..//../dist/gudcook/fontawesome-webfont.woff2"
              content_type = "${lookup(var.mime_types, "woff2")}"
              etag = "${md5(file("..//../dist/gudcook/fontawesome-webfont.woff2"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_vendor-es2015_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/vendor-es2015.js.map"
              source = "..//../dist/gudcook/vendor-es2015.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/vendor-es2015.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_styles-es5_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/styles-es5.js"
              source = "..//../dist/gudcook/styles-es5.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/styles-es5.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_scripts_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/scripts.js"
              source = "..//../dist/gudcook/scripts.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/scripts.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_polyfills-es5_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/polyfills-es5.js.map"
              source = "..//../dist/gudcook/polyfills-es5.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/polyfills-es5.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_fontawesome-webfont_ttf" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/fontawesome-webfont.ttf"
              source = "..//../dist/gudcook/fontawesome-webfont.ttf"
              content_type = "${lookup(var.mime_types, "ttf")}"
              etag = "${md5(file("..//../dist/gudcook/fontawesome-webfont.ttf"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_polyfills-es5_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/polyfills-es5.js"
              source = "..//../dist/gudcook/polyfills-es5.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/polyfills-es5.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_vendor-es5_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/vendor-es5.js.map"
              source = "..//../dist/gudcook/vendor-es5.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/vendor-es5.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_fontawesome-webfont_woff" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/fontawesome-webfont.woff"
              source = "..//../dist/gudcook/fontawesome-webfont.woff"
              content_type = "${lookup(var.mime_types, "woff")}"
              etag = "${md5(file("..//../dist/gudcook/fontawesome-webfont.woff"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_runtime-es5_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/runtime-es5.js.map"
              source = "..//../dist/gudcook/runtime-es5.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/runtime-es5.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_scripts_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/scripts.js.map"
              source = "..//../dist/gudcook/scripts.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/scripts.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_main-es5_js" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/main-es5.js"
              source = "..//../dist/gudcook/main-es5.js"
              content_type = "${lookup(var.mime_types, "js")}"
              etag = "${md5(file("..//../dist/gudcook/main-es5.js"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_assets_logo_png" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/assets/logo.png"
              source = "..//../dist/gudcook/assets/logo.png"
              content_type = "${lookup(var.mime_types, "png")}"
              etag = "${md5(file("..//../dist/gudcook/assets/logo.png"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_assets_dish-1_png" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/assets/dish-1.png"
              source = "..//../dist/gudcook/assets/dish-1.png"
              content_type = "${lookup(var.mime_types, "png")}"
              etag = "${md5(file("..//../dist/gudcook/assets/dish-1.png"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_assets_dish-2_png" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/assets/dish-2.png"
              source = "..//../dist/gudcook/assets/dish-2.png"
              content_type = "${lookup(var.mime_types, "png")}"
              etag = "${md5(file("..//../dist/gudcook/assets/dish-2.png"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_assets_dish-3_png" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/assets/dish-3.png"
              source = "..//../dist/gudcook/assets/dish-3.png"
              content_type = "${lookup(var.mime_types, "png")}"
              etag = "${md5(file("..//../dist/gudcook/assets/dish-3.png"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_runtime-es2015_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/runtime-es2015.js.map"
              source = "..//../dist/gudcook/runtime-es2015.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/runtime-es2015.js.map"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_fontawesome-webfont_eot" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/fontawesome-webfont.eot"
              source = "..//../dist/gudcook/fontawesome-webfont.eot"
              content_type = "${lookup(var.mime_types, "eot")}"
              etag = "${md5(file("..//../dist/gudcook/fontawesome-webfont.eot"))}"
            }

            resource "aws_s3_bucket_object" "___dist_gudcook_main-es5_js_map" {
              bucket = "${aws_s3_bucket.gudcook-s3.id}"
              key = "/main-es5.js.map"
              source = "..//../dist/gudcook/main-es5.js.map"
              content_type = "${lookup(var.mime_types, "map")}"
              etag = "${md5(file("..//../dist/gudcook/main-es5.js.map"))}"
            }
