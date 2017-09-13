#!/bin/sh -

# watch the volume name dont have the stack name prepended

docker run -it --rm \
      -v seo-fb-pwa_certs:/etc/letsencrypt \
      -v seo-fb-pwa_certs-data:/data/letsencrypt \
      deliverous/certbot \
      certonly \
      --webroot --webroot-path=/data/letsencrypt \
      -d beta.seocahill.com 