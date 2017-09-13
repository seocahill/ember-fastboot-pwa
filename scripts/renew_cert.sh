#!/bin/sh -

docker run -t --rm \
      -v seo-fb-pwa_certs:/etc/letsencrypt \
      -v seo-fb-pwa_certs-data:/data/letsencrypt \
      deliverous/certbot \
      renew \
      --webroot --webroot-path=/data/letsencrypt