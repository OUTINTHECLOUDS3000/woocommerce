let config = require( '../../playwright.config.js' );
const { devices } = require( '@playwright/test' );

config = {
	...config,
	projects: [
		{
			name: 'default wpcom',
			use: { ...devices[ 'Desktop Chrome' ] },
			grepInvert: /@local/,
			testIgnore: '**/api-tests/**',
		},
	],
};

module.exports = config;
