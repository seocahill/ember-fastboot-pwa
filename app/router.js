import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('work');
  this.route('other', function() {});
  this.route('thesis', {
    path: 'other/thesis'
  });
});

export default Router;
