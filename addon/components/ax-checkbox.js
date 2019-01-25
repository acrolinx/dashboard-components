import Component from '@ember/component';

const KEYCODE_SPACE = 32;
const KEYCODE_ENTER = 13;

export default Component.extend({
  tagName: '',

  actions: {
    onChange(value) {
      if (this.onChange) {
        this.onChange(value);
      }
    },
 
    onKeyPress(e) {
      if (e.which === KEYCODE_ENTER || e.which === KEYCODE_SPACE) {
        e.preventDefault();
        this.onChange(!this.value);
      }
    }
  }
});
