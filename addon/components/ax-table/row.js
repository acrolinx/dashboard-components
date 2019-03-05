import Component from '@ember/component';
import layout from '../../templates/components/ax-table/row';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    mouseEnter() {
      if (this.onMouseEnter) {
        this.onMouseEnter();
      }
    },

    mouseLeave() {
      if (this.onMouseLeave) {
        this.onMouseLeave()
      }
    }
  }
});
