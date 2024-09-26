//Imports
import { order} from "@stores/order"
import { get } from "svelte/store"
import order_options from "$lib/jsons/orderOptions.json"
import { redirect } from "@sveltejs/kit"

//Load data
export function load({params}:{params:{[key:string]:any}}){
    //Catching data from files
    let categories:{[key:string]:any} = order_options.categories
    let tagGroups = order_options.tagGroups

    //Catching data from page params
    let category = params.category

    let tagGroup:any

    for(let sec in categories[category].sections){
        let section:OptionSection = categories[category].sections[sec]
        if(get(order).tags[sec]==undefined || get(order).tags[sec]==null) {
            tagGroup = Object.entries(tagGroups).filter((tg)=>tg[1].id == parseInt(sec))[0][0]
            redirect(307,`./${category}/${tagGroup}`)
        }
    }
    redirect(307,`./${category}/info`)
}

//Form actions
export const actions = {
    default: async({request}:{request:Request})=>{
    }
}