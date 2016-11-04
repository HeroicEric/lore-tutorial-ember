import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  user: belongsTo('user'),

  text: attr('string'),
  createdAt: attr('date')
});
