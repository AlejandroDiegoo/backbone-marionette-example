var Marionette = require('backbone.marionette');

var Router = Marionette.AppRouter.extend({

	appRoutes: {

		'preload': 'preload',
		'home': 'home',
		'page1': 'page1',
		'page2': 'page2',
		'page3': 'page3',
		'page4': 'page4',
		'page5': 'page5',
		'page6': 'page6',
		'page7': 'page7'

	}

});

module.exports = Router;
