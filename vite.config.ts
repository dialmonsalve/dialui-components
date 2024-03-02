/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],

	test: {
		environment: 'happy-dom',
		globals: true,
		coverage: {
			provider: 'v8',
			reportsDirectory: './coverage/unit/',
			enabled: true,
			include: ['src/prod/components/**/*.tsx'],
			exclude: ['src/prod/components/icons'],
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id
							.toString()
							.split('node_modules/')[1]
							.split('/')[0]
							.toString();
					}
				},
			},
		},
	},
	resolve:{
		alias: {
			'@/prodStyles': '/src/styles/components',
			'@/prodComponents': '/src/components',
			'@/prodHooks': '/src/hooks',
			'@/devComponents': '/src/develop/components',
			'@/utils': '/src/utils',
			'@/devHooks': '/src/develop/hooks',
			'@/lang': '/src/develop/lang',
			'@/':"/src"
		}
	}
});
