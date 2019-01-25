import Radio from 'ember-paper/components/paper-radio';

const KEYCODE_SPACE = 32;
const KEYCODE_ENTER = 13;

export default Radio.extend({
  change(value) {
    if (this.onChange) {
      this.onChange(value);
    }
  },

  keyPress(e) {
    if (e.which === KEYCODE_ENTER || e.which === KEYCODE_SPACE) {
      e.preventDefault();
      this.onChange(this.groupValue === this.value ? undefined : this.value);
    }
  }
});
