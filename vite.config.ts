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
});
