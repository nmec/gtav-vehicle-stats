App.IndexController = Ember.ArrayController.extend({
	searchText: null,

	props: [
		"name",
		"type",
		"class",
		"manufacturer",
		"speed",
		"braking",
		"acceleration",
		"traction",
		"value",
	],

	sortProperties: ['manufacturer'],

	sortAscending: true,

	clear: function () {
		this.get('model').clear();
	},

	arrangedContent: function() {

		var searchText = this.get('searchText'),
			vehicles = this.get('model');

		if (!searchText) {
			searchText = ' ';
		}

		var regex = new RegExp(searchText, 'i');

		var filtered = vehicles.filter(function(item, index, enumerable) {
			var string = item.get('name') + ' ' + item.get('manufacturer');
			var matches = string.match(regex);

			return matches;
		});

		// return filtered;
		return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
			content: filtered,
			sortProperties: this.get('sortProperties'),
			sortAscending: this.get('sortAscending')
		});

	}.property('model', 'searchText', 'sortAscending', 'sortProperties'),

});