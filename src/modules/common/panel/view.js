var Marionette = require('backbone.marionette');
var tpl = require('underscore-template-loader');

var itemView = Marionette.ItemView.extend({

	tagName: 'li',
	template: require('./templates/item.html'),
	attributes: function() {
    return {
      id: 'panel-' + this.model.get('id')
    };
  }

});

var View = Marionette.CompositeView.extend({

  childView: itemView,
  childViewContainer: 'ul',
	className: 'table-row',
  template: require('./templates/main.html')

});

module.exports = View;
