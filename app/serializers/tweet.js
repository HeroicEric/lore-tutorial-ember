import DS from 'ember-data';

const { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    let data = payload.data.map((tweetData) => {
      return {
        type: 'tweet',
        id: tweetData.id,
        attributes: {
          text: tweetData.text,
          createdAt: tweetData.createdAt
        }
      };
    });

    return { data };
  }
});
