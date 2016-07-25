import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'huayra-ritmos/tests/helpers/start-app';
import indexPage from '../pages/index-page';
import patternPage from '../pages/pattern-page';

var application;

module('Acceptance | puede crear ritmo', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {

  indexPage.
    visit().
    crearUnNuevoProyecto();

  andThen(function() {
    assert.equal(currentURL().indexOf("pattern"), '1', "Ingresó a la ruta pattern");
    assert.ok(patternPage.elPlayerEstaDetenido, "El player se encuentra inicialmente detenido.");

    patternPage.play();
    assert.ok(patternPage.elPlayerEstaReproduciendo, "Puede comenzar a reproducir.");

    setTimeout(function() {
      patternPage.stop();
      assert.ok(patternPage.elPlayerEstaDetenido, "El player se pudo detener.");
    }, 500);

  });

});
