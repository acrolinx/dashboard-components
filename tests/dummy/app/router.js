import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('introduction', { path: "/" });
    this.route('components', function() {
      this.route('ax-checkbox');
      this.route('ax-icon');
      this.route('ax-pagination');
      this.route('ax-svg');
      this.route('ax-table');
      this.route('ax-title');
    });
 });

});


export default Router;
