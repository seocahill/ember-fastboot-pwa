/* eslint-env node */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: "production"
    }
  };

  if (deployTarget === 'production') {
    ENV['fastboot-s3'] = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.FASTBOOT_BUCKET,
      region: process.env.FASTBOOT_REGION
    }
  }

  return ENV;
};
