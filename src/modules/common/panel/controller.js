var Marionette = require('backbone.marionette');

var Controller = Marionette.Object.extend({

	show: function(collection) {

		var View = require('./view');

		var view = new View({
			collection: collection
		});

		APP.mainLayout.panel.show(view);

	}

});

module.exports = Controller;
