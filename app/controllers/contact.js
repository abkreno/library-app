import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  message: '',

  isValidMessage: Ember.computed('message' ,function () {
    return this.get('message').length >= 5;
  }),

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed('isValidMessage','isValidEmail' ,function () {
    return !(this.get('isValidEmail') && this.get('isValidMessage'));
  }),

  status: Ember.computed('isDisabled',function () {
    return this.get('isDisabled') ?'': 'has-success';
  })

});
