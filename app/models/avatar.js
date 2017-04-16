import DS from 'ember-data';

export default DS.Model.extend({
  img_url: DS.attr('string'),
  name: DS.attr('string')
});
