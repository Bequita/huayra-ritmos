import Ember from 'ember';

export default Ember.Controller.extend({

  onCancel() {
    let options = this.get('modal.model');

    if (options && options.callback_cancel) {
      options.callback_cancel.call();
    }
  },

  onOk() {
    let options = this.get('modal.model');

    if (options && options.callback_ok) {
      options.callback_ok.call();
    }
  },

  actions: {
    cancel() {
      this.onCancel();
      this.send('closeModal');
    },

    accept() {
      this.onOk();
      this.send('closeModal');
    }
  }
});
