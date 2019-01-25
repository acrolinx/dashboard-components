import Dialog from 'ember-paper/components/paper-dialog';

export default Dialog.extend({
  didInsertElement() {
    this._super(...arguments);

    const focusableTags = [
      'button',
      '[href]',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])'
    ]
    const focusableElements = this.destinationEl
      .querySelectorAll(focusableTags.join(','));
    const elements = Array.from(focusableElements);

    if (elements.length > 0) {
      const top = elements[0];
      const bottom = elements[elements.length - 1];

      const keyTrapHandler = this._createKeyboardTrap(top, bottom);
      this.set('keyboardTrapHandler', keyTrapHandler);
      this.destinationEl.addEventListener('keydown', keyTrapHandler);
    }
  },

  willDestroyElement() {
    this.destinationEl.removeEventListener('keydown', this.keyboardTrapHandler);
    this._super(...arguments);
  },

  _createKeyboardTrap(top, bottom) {
    return (event) => {
      if (event.key === 'Tab' || event.keyCode === 9) {
        if ( event.shiftKey ) {
          if (document.activeElement === top) {
            bottom.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === bottom) {
            top.focus();
            event.preventDefault();
          }
        }
      }
    }
  }
});
