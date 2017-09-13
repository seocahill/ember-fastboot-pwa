import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    navigateTo(path) {
      this.transitionToRoute(path)
    }
  }
});