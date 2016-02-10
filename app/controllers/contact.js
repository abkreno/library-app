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
  }),

  actions: {
    sendMessage() {
      const email = this.get('emailAddress');
      const message = this.get('message');
      const contact = this.store.createRecord('contact', { email: email ,message: message });
      contact.save().then((response)=> {
        this.set('responseMessage', `Thank you! We saved your contact with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }
});
