define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Validation = require('./helperSP-validation');
	var HelperSPView = require('./helperSPView');

	Adapt.on('articleView:postRender', function(view) {
		var extensions = Adapt.course.get('_globals')._extensions;
		
		if (Validation.isHelperActive(extensions)) {
			new HelperSPView({model: view.model});
		}
		
	});

});