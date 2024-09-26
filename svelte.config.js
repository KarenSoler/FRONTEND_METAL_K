import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	onwarn: (warning, handler) => {
	  // suppress warnings on `vite dev` and `vite build`; but even without this, things still work
	  if (warning.code === "a11y-click-events-have-key-events") return;
	  if (warning.code === "a11y-no-static-element-interactions") return;
	  handler(warning);
	},
	preprocess: vitePreprocess(),
	//SASS Compiler
	preprocess: sveltePreprocess({
		sass:{}
	}),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {//Base paths for deploy
			assets: process.argv.includes('dev') ? '' : process.env.VITE_BASE_URL,
			base: process.argv.includes('dev') ? '' : process.env.VITE_BASE_URL
		},
		alias:{//Fast Routes Access 
			'@components/*':'src/lib/components/*',
			'@admin-components/*':'src/lib/components/admin/*',
			'@user-components/*':'src/lib/components/user/*'
		},
		env:{
			privatePrefix:'PVE_',
			publicPrefix: 'PBE_'
		}
	}
};

export default config;
