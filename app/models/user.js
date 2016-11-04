import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  authId: attr('string'),
  avatar: attr('string'),
  createdAt: attr('date'),
  nickname: attr('string'),
  updatedAt: attr('date')
});
