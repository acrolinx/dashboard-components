import Component from '@ember/component';
import layout from '../templates/components/ax-table';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    updateSort(value) {
      let currentSortCategory = this.get('sort').startsWith('-') ? this.get('sort').slice(1) : this.get('sort');
      let newSort = value;
      if (currentSortCategory === value && !this.get('sort').startsWith('-')) {
        newSort = '-' + currentSortCategory;
      }
      this.updateSort(newSort);
    }
  }
});
