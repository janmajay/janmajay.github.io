









AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['en_US'] = 'English (United States)';
			direction['en_US'] = 'ltr';

		

			available['ar_SA'] = 'Arabic (Saudi Arabia)';
			direction['ar_SA'] = 'rtl';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);