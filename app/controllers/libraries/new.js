import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: Ember.computed('model.name','model.phone','model.address',function () {
    if(this.get('model').get('name')==undefined
      ||this.get('model').get('phone')==undefined
      ||this.get('model').get('address')==undefined){
      return true;
    }
    return this.get('model').get('name').length < 4||this.get('model').get('phone').length < 4||this.get('model').get('address').length < 4;
  })
});
