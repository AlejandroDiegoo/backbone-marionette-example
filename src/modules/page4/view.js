var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var View = Marionette.ItemView.extend({

	template: require('./templates/main.html'),
	tagName: 'section',
	className: 'table-cell',
	id: 'content-page4'

});

module.exports = View;
