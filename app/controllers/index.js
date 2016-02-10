import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  status: Ember.computed('isValid',function () {
    return this.get('isValid')?'has-success':'';
  })

});
