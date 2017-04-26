var Backbone = require('backbone');

var models = {

	panel: {

		get: function() {

			return new Backbone.Collection([
				{
					id: 'home',
					link: '#home',
					text: 'HOME'
				},
				{
					id: 'page1',
					link: '#page1',
					text: 'PAGE 1'
				},
				{
					id: 'page2',
					link: '#page2',
					text: 'PAGE 2'
				},
				{
					id: 'page3',
					link: '#page3',
					text: 'PAGE 3'
				},
				{
					id: 'page4',
					link: '#page4',
					text: 'PAGE 4'
				},
				{
					id: 'page5',
					link: '#page5',
					text: 'PAGE 5'
				},
				{
					id: 'page6',
					link: '#page6',
					text: 'PAGE 6'
				},
				{
					id: 'page7',
					link: '#page7',
					text: 'PAGE 7'
				},
			]);

		}

	}

};

APP.reqres.setHandler('panel:get', function(params) {
		return models.panel.get();
});

module.exports = models;
