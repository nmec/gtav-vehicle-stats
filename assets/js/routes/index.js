App.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('vehicle');
	},
	actions: {
		sort: function(prop) {

			var current = this.controller.get('sortProperties');
			var order = this.controller.get('sortAscending');

			console.log(current[0], order, prop);

			if ( current[0] == prop ) {
				// this.get('model').clear();
				this.controller.toggleProperty('sortAscending');
			} else {
				this.controller.set('sortProperties', [prop]);
			}
		}
	}
});