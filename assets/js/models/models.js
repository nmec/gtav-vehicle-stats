App.Vehicle = DS.Model.extend({
	name: DS.attr(),
	type: DS.attr(),
	class: DS.attr(),
	manufacturer: DS.attr(),
	speed: DS.attr(),
	braking: DS.attr(),
	acceleration: DS.attr(),
	traction: DS.attr(),
	value: DS.attr(),
});