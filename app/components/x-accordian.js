import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['collapsible', 'collection', 'with-header'],

  didInsertElement() {
    this.$().collapsible();
  },
 });