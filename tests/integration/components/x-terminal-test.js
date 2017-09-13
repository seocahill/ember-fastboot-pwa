import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { setBreakpointForIntegrationTest } from 'seocahill/tests/helpers/responsive';
import wait from 'ember-test-helpers/wait';

moduleForComponent('x-terminal', 'Integration | Component | x terminal', {
  integration: true
});

test('it renders the terminal', function(assert) {
  setBreakpointForIntegrationTest(this, 'desktop');

  assert.expect(4);

  this.render(hbs`{{x-terminal}}`);
  
  return wait().then(() => {
    let text = this.$().text().split('|').get('lastObject').trim();
    assert.ok(text.includes("Ruby + JS web developmentEnter a command or type help>"));

    this.$('.terminal').terminal().clear();
    this.$('.terminal').terminal().exec("help");
    text = this.$().text().trim();
    assert.ok(text.includes("cmds [ about | work | other | contact ]"));

    this.$('.terminal').terminal().clear();
    this.$('.terminal').terminal().exec("contact");
    text = this.$().text().trim();
    assert.ok(text.match(/seo.cahill/));

    this.$('.terminal').terminal().clear();
    this.$('.terminal').terminal().exec("not a command");
    text = this.$().text().trim();
    assert.ok(text.match(/cmds/));
  })
});

test('should trigger external action when command entered in terminal', function (assert) {
  assert.expect(1);

  this.set('externalAction', (actual) => {
    let expected = 'about';
    assert.deepEqual(actual, expected, 'submitted value is passed to external action');
  });

  this.render(hbs`{{x-terminal navigateTo=(action externalAction)}}`);
  
  return wait().then(() => {
    this.$('.terminal').terminal().clear();
    this.$('.terminal').terminal().exec("about");
  })
});