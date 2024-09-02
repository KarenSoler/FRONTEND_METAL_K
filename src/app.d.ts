// See https://kit.svelte.dev/docs/types#app to know svelte native types
declare global {
	namespace App {
	}

	//TODO Components
	// ? Header
	interface HeaderModule{
		name:string
		route:string
	}
}

export {};
