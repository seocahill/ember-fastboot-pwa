import { test } from 'qunit';
import moduleForAcceptance from 'seocahill/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should link to my about page.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to my work page.', function (assert) {
  visit('/');
  click('a:contains("Work")');
  andThen(function () {
    assert.equal(currentURL(), '/work', 'should navigate to about');
  });
});

test('should link to my other page.', function (assert) {
  visit('/');
  click('a:contains("Other")');
  andThen(function () {
    assert.equal(currentURL(), '/other', 'should navigate to about');
  });
});


