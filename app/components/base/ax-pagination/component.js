import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  previousPage: computed('currentPage', function() {
    return this.currentPage - 1;
  }),

  nextPage: computed('currentPage', function() {
    return this.currentPage + 1;
  }),

  actions: {
    updatePage(value) {
      const newPage = Number(value);
      this.onChange(newPage);
    },

    nextPage() {
      this.onChange(this.nextPage);
    },

    previousPage() {
      this.onChange(this.previousPage);
    }
  }
});
