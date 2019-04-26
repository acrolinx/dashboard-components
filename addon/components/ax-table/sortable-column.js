import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ax-table/sortable-column';

export default Component.extend({
  layout,
  tagName: '',

  active: computed('tableAPI.sort', 'sortBy', function() {
    let currentSortCategory = this.get('tableAPI.sort').startsWith('-') ? this.get('tableAPI.sort').slice(1) : this.get('tableAPI.sort');
    return currentSortCategory === this.sortBy;
  }),
  sortDirection: computed('tableAPI.sort', function () {
    return this.get('tableAPI.sort').startsWith("-") ? 'desc' : 'asc'
  })
});
