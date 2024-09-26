//Imports
import { order } from "@stores/order"
import order_options from "$lib/jsons/orderOptions.json"
import { get } from "svelte/store"
import { redirect } from "@sveltejs/kit"

//Form actions
export const actions = {
    default: async({request,params}:{request:Request,params:{[key:string]:any}})=>{
        const formData = (await request.formData())
        let tag = formData.get(params.tagGroup)?.toString()
        let category = params.category

        if(tag){
            order.update((value)=>{
                for(let tg in value.tags){
                    if(value.tags[tg]==undefined){
                        value.tags[tg] = parseInt(tag)
                        return value
                    }
                }
                return value
            })
            redirect(307,`../${category}`)
        }
    }
}   