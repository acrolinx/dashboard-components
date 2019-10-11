import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ax-table/sortable-column';

export default Component.extend({
  layout,
  tagName: '',

  isDirectionAsc: computed( 'tableAPI.sort' , function() {
    return ! this.get('tableAPI.sort').startsWith('-');
  }),

  active: computed('tableAPI.sort', 'sortBy', function() {
    let column = this.get('tableAPI.sort');
    column = column.startsWith('-') ? column.slice(1) : column;
    return column === this.sortBy;
  })
});