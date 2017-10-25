[![Build Status](https://travis-ci.org/seocahill/ember-fastboot-pwa.svg?branch=master)](https://travis-ci.org/seocahill/ember-fastboot-pwa)
[![Maintainability](https://api.codeclimate.com/v1/badges/573aafedbfda09f04720/maintainability)](https://codeclimate.com/github/seocahill/ember-fastboot-pwa/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/573aafedbfda09f04720/test_coverage)](https://codeclimate.com/github/seocahill/ember-fastboot-pwa/test_coverage)

# Ember fastboot PWA demo

This is based on the code for my portfolio site www.seocahill.com

### Progressive web app

My site scores 100 on the lighthouse PWA test.

You can read more about progressive web apps [here](https://developers.google.com/web/progressive-web-apps/).

Don't forget assets are cached indefinitely even offline (until version is updated in ```ember-cli-build.js```) so you will need to enable service worker update on reload in dev-tools for code reloading to work.

### Server rendering

Ember fastboot is ember's server side rendering solution, read more [here](https://ember-fastboot.com/)

The deployment strategy is to download the latest app from an s3 bucket. The user should then be prompted to update to the latest version (dont' forget to bump the version before deploying!).

### Docker stack

The stack is setup to run in development at www.seocahill.dev and blog.seocahill.dev over ssl with self signed certs.

There is a script included for generating ssl certs you'll need to update your hosts file also to get the stack up and running.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd seocahill`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

```
docker stack deploy my-site-and-blog

ember deploy staging --activate
```

Also need s3 credentials set (see ```deploy.js```)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
