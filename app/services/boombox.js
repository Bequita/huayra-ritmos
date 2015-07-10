import Ember from 'ember';

export default Ember.Service.extend({

  loadSounds: function() {
    boombox.setup();

    var files = fs.readdirSync('sounds').filter(function(e) {return e.indexOf('.wav') > 0});

    files.forEach((name) => {
      this.loadSound(name);
    });

  }.on('init'),

  loadSound: function(name) {
    var path = "sounds/" + name;

    var options = {
      src: [{
            media: 'audio/mp4',
            path: path,
        }]
    };

    console.log('cargando sonido ' + name);

    boombox.load(name, options, function (err, audio) {
      console.log("err", err);
      console.log("audio", audio);
    });

  },

  play: function(name) {
    boombox.get(name).play();
  }
});
