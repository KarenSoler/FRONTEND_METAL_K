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
		images: string[] | string,
		category: int,
		price: double,
		time: number,
		tags: int[]
	}

	interface Tags{
		id: number 
		title: string
		description: string
	}

	interface TagsGroups{
		id:number
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

	interface Enterprise{
		id?:int
		branch: string
		slogan: string
		description: string
		logo: [string]
		contacts: Contact[]
		pictures: [string]
	}

	//? FormAction
	type ApiStatus = 'ok'|'error'|'server'|undefined

	interface ApiResponseData<R>{
		status:ApiStatus
		message: string|undefined
		result: R extends null?{[key: string]: any}:R
		[Symbol.iterator]()
	}

	//? Enterprise
    interface Contact{
		type_id: int|"none"
        type?: string
        value?: string
        icon?: string
    }

	//? Solicitude
	interface OptionSection{
		title: string
		icon?: string
		id: int
		description: string
		options: Option[]
	}

	interface Option{
		key: string
		id: int
		description: string
		icon?: string
	}
}

  

export {};
