App = Ember.Application.create();

App.ApplicationAdapter = DS.Adapter.extend({
	findAll: function(store, type, id) {
		var url = 'assets/data/vehicles.json';

		return new Ember.RSVP.Promise(function(resolve, reject) {
			jQuery.getJSON(url).then(function(data) {
				Ember.run(null, resolve, data);
			}, function(jqXHR) {
				jqXHR.then = null; // tame jQuery's ill mannered promises
				Ember.run(null, reject, jqXHR);
			});
		});
	}
});

require('./models/models.js');
require('./routes/routes.js');
require('./controllers/controllers.js');