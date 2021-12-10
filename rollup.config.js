import { defineConfig } from 'rollup';

import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

import { name } from './package.json';
import os from 'os';
import path from 'path';

function GetBetterDiscordPath() {
	switch (os.platform()) {
		case 'darwin':
			return [process.env.HOME, 'Library/Application Support/BetterDiscord/plugins/'];
		case 'win32':
			return [process.env.HOME, 'AppData/Roaming/BetterDiscord/plugins/'];
		default:
			throw Error(
				'Platform not implemented, please submit an issue at https://github.com/chazzox/plugin-template/issues or make a pr :)'
			);
	}
}

const meta = `
/**
 * @name ExamplePlugin
 * @author chazzox#1001
 * @description BoilerPlate extension for anyone to use :)
 * @version 0.0.1
 * @website https://github.com/chazzox/plugin-template#readme
 * @source https://github.com/chazzox/plugin-template
 */
`;

export default defineConfig({
	input: `src/${name}.tsx`,
	output: [
		{
			file: `plugin/${name}.plugin.js`,
			format: 'cjs',
			banner: meta
		},
		{
			file: path.join(...GetBetterDiscordPath(), `${name}.plugin.js`),
			format: 'cjs',
			banner: meta
		}
	],
	plugins: [
		// fixing any node_module react import
		alias({
			entries: [{ find: 'react', replacement: path.resolve(path.resolve(__dirname), 'src/react.ts') }]
		}),

		// resolve imports
		nodeResolve(),
		commonjs(),

		// .scss files to inline BdApi string
		styles({
			minimize: true,
			extensions: ['.scss'],
			mode: [
				'inject',
				(varname, id) => {
					return `BdApi.injectCSS("${name}-styles",${varname})`;
				}
			]
		}),

		// jsx transformer
		typescript(),

		// minifier
		terser({
			module: true,
			compress: { sequences: false },
			mangle: {},
			parse: {},
			rename: {},
			// Remove all comments *except* the meta comment at the top
			format: { comments: '/@name/' }
		})
	]
});
