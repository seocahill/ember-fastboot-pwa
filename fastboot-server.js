/* eslint-env node */

const S3Downloader = require('fastboot-s3-downloader');
const S3Notifier = require('fastboot-s3-notifier');
var FastBootAppServer = require('fastboot-app-server');

let downloader = new S3Downloader({
  bucket: process.env.FASTBOOT_BUCKET,
  key: 'fastboot-deploy-info.json',
  region: process.env.FASTBOOT_REGION
});

let notifier = new S3Notifier({
  bucket: process.env.FASTBOOT_BUCKET,
  key: 'fastboot-deploy-info.json',
  region: process.env.FASTBOOT_REGION
});

var server = new FastBootAppServer({
  downloader: downloader,
  notifier: notifier
});

server.start();