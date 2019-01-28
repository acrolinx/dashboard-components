import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ax-svg/avatar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders svg avatar placeholder', async function(assert) {
    await render(hbs`{{ax-svg/avatar}}`);

    assert.dom('.ax-avatar').exists();
  });
});
