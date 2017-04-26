var jquery = window.$ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var cssResponsiveTables = require('./css/css-responsive-tables.css');
var css = require('./css/main.css');

const APP = new Marionette.Application();

APP.on('start', () => {

  APP.models = require('./models.js');

  APP.mainLayout = new Backbone.Marionette.LayoutView({
    el: 'body > div',
    regions: {
      content: '#content-region',
      header: '#header-region',
      panel: '#panel-region'
    },
    template: require('./templates/layout.html'),
  }).render();

  var Router = require('./router.js');

  APP.navigate = new Router({
    controller: routerController
  }).navigate;

  Backbone.emulateHTTP = true;
  Backbone.history.start();

  APP.navigate('preload', {trigger: true});

  $(window).resize(function() {
    $('#main-region').removeClass('isOpen');
  });

});

var routerController = {

	preload: function() {
    var panelRequest = APP.request('panel:get');
    $.when(panelRequest).then(function(panelCollection) {
  		var Header = require('./modules/common/header/controller.js');
  		new Header().show();
  		var Panel = require('./modules/common/panel/controller.js');
  		new Panel().show(panelCollection);
      APP.navigate('home', {trigger: true});
    });
	},

	home: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/home/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page1: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page1/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page2: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page2/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page3: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page3/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page4: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page4/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page5: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page5/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page6: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page6/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	},

	page7: function() {
		$('#preload-region').stop().fadeIn(function() {
			var Controller = require('./modules/page7/controller.js');
			new Controller().show();
			$('#main-region').removeClass('isOpen');
			$('#preload-region').fadeOut();
		});
	}

};

$(document).ready(function() {
  APP.start();
});

window.APP = APP;
