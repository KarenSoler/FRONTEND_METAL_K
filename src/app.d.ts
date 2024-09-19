// See https://kit.svelte.dev/docs/types#app to know svelte native types
declare global {
	namespace App {
	}

	//? Components
	//Header
	interface HeaderModule{
		name:string
		route:string
	}

	//? DTOs
	interface Product{
		id: number
		images: string[],
		category: int,
		price: double,
		time: number,
		tags: int[]
	}

	interface Tags{
		id: int 
		titel: string
		description: string
	}

	interface TagsGroups{
		id:int
		title: string
		description: string
		icon: string
		tags: Tags[]
	}

	interface Category{
		id:int
		name:string
		description: string
		icon: string
	}

	interface Solicitude{
		id?:int
		date: string
		planes?: Blob[]
		technicalVisit: boolean
		address: string
		longitude: string
		latitude: string
	}

	//? FormAction
	interface ApiResponseData{
		status:'ok'|'error'|undefined
		message: string|undefined
		[key:string]:any
		[Symbol.iterator]()
	}
}

  

export {};
