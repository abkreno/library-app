import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      sendMessage() {
        const email = this.controller.get('emailAddress');
        const message = this.controller.get('message');
        const contact = this.store.createRecord('contact', { email: email ,message: message });
        contact.save().then((response)=> {
          this.controller.set('responseMessage', `Thank you! We saved your contact with the following id: ${response.get('id')}`);
          this.controller.set('emailAddress', '');
          this.controller.set('message', '');
        });
      }
    }
});
