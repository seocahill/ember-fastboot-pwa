import { test } from 'qunit';
import moduleForAcceptance from 'seocahill/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about page');

test('visiting /about-page', function(assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});
