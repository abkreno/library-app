import Ember from 'ember';

export default Ember.Route.extend({
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
