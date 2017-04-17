import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  img_url: DS.attr('string')
//  avatar_id: DS.belongsTo('avatar')

});
