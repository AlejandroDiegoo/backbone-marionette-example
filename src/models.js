var Backbone = require('backbone');

var models = {

	panelget: function() {

		return new Backbone.Collection([
			{
				id: 'home',
				link: '#home',
				text: 'HOME',
				icon: 'home'
			},
			{
				id: 'page1',
				link: '#page1',
				text: 'PAGE 1',
				icon: 'vcard'
			},
			{
				id: 'page2',
				link: '#page2',
				text: 'PAGE 2',
				icon: 'institution'
			},
			{
				id: 'page3',
				link: '#page3',
				text: 'PAGE 3',
				icon: 'picture-o'
			},
			{
				id: 'page4',
				link: '#page4',
				text: 'PAGE 4',
				icon: 'tv'
			},
			{
				id: 'page5',
				link: '#page5',
				text: 'PAGE 5',
				icon: 'user-circle'
			},
			{
				id: 'page6',
				link: '#page6',
				text: 'PAGE 6',
				icon: 'dashboard'
			},
			{
				id: 'page7',
				link: '#page7',
				text: 'PAGE 7',
				icon: 'globe'
			},
		]);

	}
};

APP.reqres.setHandler('panel:get', function(params) {
		return models.panelget();
});

module.exports = models;
