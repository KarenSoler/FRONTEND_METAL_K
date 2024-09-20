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
		title: string
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
		sections: { [key: string]: number[] | undefined}
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
}

export {};
