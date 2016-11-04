import DS from 'ember-data';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  host: 'http://localhost:1337'
});
