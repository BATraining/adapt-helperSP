define(function() {

	var Validation = {
		isHelperActive: function(extensions) {
			return extensions &&
				typeof extensions === "object" &&
				extensions.hasOwnProperty('_helper') &&
				typeof extensions._helper === "object" &&
				extensions._helper.hasOwnProperty('_isEnabled') &&
				extensions._helper.hasOwnProperty('_url');
		},
		getHelperUrl: function(extensions) {
			return (this.isHelperActive(extensions)) ? extensions._helper._url : null;
		}
	};

	return Validation;
});
