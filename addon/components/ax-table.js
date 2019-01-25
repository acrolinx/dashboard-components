import Component from '@ember/component';
import layout from '../../templates/components/ax-table';

export default Component.extend({
  layout,
  tagName: '',

  actions: {
    updateSort(value) {
      if (this.sort === value) {
        const newDirection = this.direction === 'asc' ? 'desc' : 'asc';

        this.updateDirection(newDirection);
        this.set('direction', newDirection);
      } else {
        this.updateSort(value);
        this.updateDirection('asc');
      }
    },

    updateDirection(value) {
      this.set('direction', value);
    }
  }
});
