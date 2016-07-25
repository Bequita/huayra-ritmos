import Ember from 'ember';

export default Ember.Controller.extend({
  selectedSound: null,

  emptySelection: function() {
    return (! this.get('selectedSound'));
  }.property('selectedSound'),

  actions: {
    onSelectSound: function(sound_id) {
      this.set('selectedSound', sound_id);
    },

    accept() {

      var newTrack = {
        enabled: true,
        paint: false,
        sound: this.get('selectedSound'),
        steps: [
                  {active: false, variant: true}, { active: false, variant: true}, { active: false, variant: true}, { active: false, variant: true},
                  {active: false, variant: false}, { active: false, variant: false}, { active: false, variant: false}, { active: false, variant: false},
                  {active: false, variant: true}, { active: false, variant: true}, { active: false, variant: true}, { active: false, variant: true},
                  {active: false, variant: false}, { active: false, variant: false}, { active: false, variant: false}, { active: false, variant: false},
      ]};

      this.get('modal.model.tracks').pushObject(newTrack);
      this.controllerFor('pattern').send('onChange');
    },

    acceptAndClose() {
      this.send('accept');
      this.send('closeModal');
    },

  },



});
