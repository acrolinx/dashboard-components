import Component from '@ember/component';
import layout from '../templates/components/ax-table';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    updateSort(value) {
      let currentSortingColumn = this.sort.startsWith('-') ? this.sort.slice(1): this.sort;
      if ( currentSortingColumn === value ) {
        if( !this.sort.startsWith('-') ) {
         value = '-' + value;
        }
      } 
      this.set('sort', value);
    },

  }
});
