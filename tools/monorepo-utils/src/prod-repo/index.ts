/**
 * External dependencies
 */
import { Command } from '@commander-js/extra-typings';

/**
 * Internal dependencies
 */
import { tagReleaseCommand } from './commands/tag-release';

const program = new Command( 'prod-repo' )
	.description( 'Utilities for syncing prod-repo and tagging a release.' )
	.addCommand( tagReleaseCommand );

export default program;
