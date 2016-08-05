import Ember from 'ember';

let isNodeWebkit = false;

export default Ember.Route.extend({
  menu: Ember.inject.service(),
  settings: Ember.inject.service(),

  model() {
    return new Ember.RSVP.Promise((resolve) => {
      var patterns = this.store.findAll('pattern');
      var newArray = Ember.A();

      patterns.then((data) => {
        data.forEach((record) => {
          if (!record.get('isNew')) {
            newArray.pushObject(record);
          }
        });

        resolve(newArray.reverse());
      });
    });
  },

  activate() {
    var appController = this.controllerFor("application");
    this.get('settings');

    document.title = 'Huayra Ritmos';

    if (isNodeWebkit) {
      this.get('menu').index();
      this.get('menu').itemAcercaDe.click = function () { appController.send('showAboutModal'); };
      this.get('menu').itemConfigurar.click = function () { appController.send('showConfigModal'); };
    }

  },

  actions: {
    invalidateModel() {
      Ember.Logger.log('Route is now refreshing...');
      this.refresh();
    }
  }

});
