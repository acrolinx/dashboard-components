import Component from '@ember/component';

export default Component.extend({
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
