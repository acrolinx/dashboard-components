import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ax-svg/logo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders svg logo', async function(assert) {
    await render(hbs`{{ax-svg/logo}}`);

    assert.dom('.ax-logo').exists();
  });
});
