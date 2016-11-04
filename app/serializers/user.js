import DS from 'ember-data';

const { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload /*, id, requestType */) {
    let data = {
      type: 'user',
      id: payload.id,
      attributes: {
        nickname: payload.nickname,
        authId: payload.authId,
        avatar: payload.avatar,
        createdAt: payload.createdAt,
        updatedAt: payload.updatedAt
      }
    };

    return { data };
  }
});
