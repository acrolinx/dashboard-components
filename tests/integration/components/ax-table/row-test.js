import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ax-table/row', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{ax-table/row}}`);

    assert.equal(this.element.textContent.trim(), '');

    await render(hbs`
      {{#ax-table/row}}
        template block text
      {{/ax-table/row}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('it calls onMouseEnter prop when mouse enter the row', async function(assert) {
    assert.expect(1);

    this.set('onMouseEnter', () => {
      assert.ok('onMouseEnter called');
    });

    await render(hbs`
      {{#ax-table/row onMouseEnter=(action onMouseEnter)}}
        Table row
      {{/ax-table/row}}
    `);

    triggerEvent('tr.md-row','mouseover');
  });

  test('it calls onMouseLeave prop when mouse leave the row', async function(assert) {
    assert.expect(1);

    this.set('onMouseLeave', () => {
      assert.ok('onMouseLeave called');
    });

    await render(hbs`
      {{#ax-table/row onMouseLeave=(action onMouseLeave)}}
        Table row
      {{/ax-table/row}}
    `);

    triggerEvent('tr.md-row','mouseout');
  });
});
