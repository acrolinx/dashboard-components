import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ax-svg', function(hooks) {
  setupRenderingTest(hooks);

  test('it yields avatar component', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#ax-svg as |svg|}}
        {{svg.avatar}}
      {{/ax-svg}}
    `);

    assert.dom('svg').exists();
  });

  test('it yields logo component', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{#ax-svg as |svg|}}
        {{svg.logo}}
      {{/ax-svg}}
    `);

    assert.dom('svg').exists();
  });
});
