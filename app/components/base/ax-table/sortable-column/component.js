import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  active: computed('tableAPI.sort', 'sortBy', function() {
    return this.get('tableAPI.sort') === this.sortBy;
  })
});
