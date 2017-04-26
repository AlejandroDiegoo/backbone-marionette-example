var Marionette = require('backbone.marionette');

var Controller = Marionette.Object.extend({

	show: function() {

		var View = require('./view');
		var view = new View();
		APP.mainLayout.header.show(view);

	}

});

module.exports = Controller;
