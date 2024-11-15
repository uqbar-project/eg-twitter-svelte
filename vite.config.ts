import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
		coverage: {
			include: ['src'],
		},
	},
})