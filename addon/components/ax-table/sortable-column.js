import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ax-table/sortable-column';

export default Component.extend({
  layout,
  tagName: '',

  active: computed('tableAPI.sort', 'sortBy', function() {
    return this.get('tableAPI.sort') === this.sortBy;
  })
});
