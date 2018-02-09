define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	var Validation = require('./helperSP-validation');
	
	var HelperSPView = Backbone.View.extend({
		template: 'helperSP',

		initialize: function() {
			this.postRender();
		},

		postRender: function() {
			var template = Handlebars.templates[this.template];

			$('.navigation .navigation-inner').append(template({displayHelper:true}));
			$('.navigation-inner .SP-help-icon').on('click', this.openHelpPageSP);
		},

		openHelpPageSP: function(event) {
			var extensions = Adapt.course.get('_globals')._extensions;
			var url = Validation.getHelperUrl(extensions);

			if (url && event.type == "click") {
				window.open(url,'_blank');	
			}
		}
	});

	return HelperSPView;
})