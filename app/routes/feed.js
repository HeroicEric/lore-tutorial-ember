import Ember from 'ember';

const { Route } = Ember;

const TWEETS= {
  data: [{
    data: {
      id: 1,
      user: 1,
      text: 'Nothing can beat science!',
      createdAt: '2016-10-04T05:10:49.382Z'
    }
  }]
};

export default Route.extend({
  model() {
    return {
      tweets: TWEETS
    }
  }
});
