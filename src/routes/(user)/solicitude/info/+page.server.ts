import { order } from "@stores/order"
import { get } from "svelte/store"

export function load(){
    console.log('B1')
    // order.set({
    //     category:undefined,
    //     tags:{}
    // })
}

export const actions = {
    default:()=>{

    }
}