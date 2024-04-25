import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'rList',
			social: {
				github: 'https://github.com/rList-org',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'get-start' },
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api-ref' },
				},
				{
					label: "Drivers' Config",
					autogenerate: { directory: 'drivers' },
				},
			],
		}),
	],
});
