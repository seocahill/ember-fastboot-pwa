#!/bin/sh -

# docker run --rm -v /tmp/certs:/certs -e SSL_SUBJECT=test.seocahill.dev  paulczar/omgwtfssl

mkdir certs && cd certs

cat > openssl.cnf <<-EOF
  [req]
  distinguished_name = req_distinguished_name
  x509_extensions = v3_req
  prompt = no
  [req_distinguished_name]
  CN = *.seocahill.dev
  [v3_req]
  keyUsage = keyEncipherment, dataEncipherment
  extendedKeyUsage = serverAuth
  subjectAltName = @alt_names
  [alt_names]
  DNS.1 = *.seocahill.dev
  DNS.2 = seocahill.dev
EOF

openssl req \
  -new \
  -newkey rsa:2048 \
  -sha1 \
  -days 3650 \
  -nodes \
  -x509 \
  -keyout ssl.key \
  -out ssl.crt \
  -config openssl.cnf

rm openssl.cnf

cd ..