import Ember from 'ember';
import RSVP from 'rsvp';

const { Route } = Ember;
const { hash } = RSVP;

export default Route.extend({
  model() {
    return hash({
      tweets: this.store.findAll('tweet')
    });
  }
});
