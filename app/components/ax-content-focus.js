import Component from '@ember/component';
import { next }  from '@ember/runloop';

export default Component.extend({
  didInsertElement() {

    this._super(...arguments);
    this.addObserver('triggerProperty', function() {
      if (document.activeElement === this.element.querySelector(this.selector)) {
        next(() => {
          this.element.querySelector(this.selector).focus();
        })
      }
    });
  },

  willDestroyElement() {
    this._super(...arguments);

    this.removeObserver('triggerProperty');
  }
})
