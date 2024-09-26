//Imports
import { order } from "@stores/order"
import order_options from "$lib/jsons/orderOptions.json"
import { redirect } from "@sveltejs/kit"
import { get } from "svelte/store"

//Load data
export function load(){
    let section:OptionSection
    let categories:{[key:string]:any}  = order_options.categories

    order.set({
        category:undefined,
        tags:{}
    })
    section = {
        id:0,
        title:"Categories",
        description:" Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
        options:Object.keys(categories).map((cat:string)=>{
            return {
                value:cat,
                key:categories[cat].name,
                id:categories[cat].id,
                description: categories[cat].description,
                icon: categories[cat].icon
            }
        })
    }

    return {section}
}

//Form actions
export const actions = {
    default: async({request}:{request:Request})=>{
        let categories:{[key:string]:any} = order_options.categories
        const formData = (await request.formData())
        let category = formData.get('category')?.toString()
        if(category){
            order.update((value)=>{
                value.category = categories[category].id
                return value
            })
            redirect(307,`./${category}`)
        }
    }
}