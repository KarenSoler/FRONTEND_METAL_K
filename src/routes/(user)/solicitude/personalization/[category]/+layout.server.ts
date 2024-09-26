//Imports
import { order } from "@stores/order"
import { get } from "svelte/store"
import order_options from "$lib/jsons/orderOptions.json"
import { redirect } from "@sveltejs/kit"
import { title } from "process"
import { describe } from "node:test"

export function load({params}:{params:{[key:string]:any}}){
    //Catching data from files
    let categories:{[key:string]:Category} = order_options.categories
    let tagGroups:{[key:string]:TagsGroup} = order_options.tagGroups
    let tags:Tags[] = order_options.tags

    //Catching data from page params
    let category = params.category

    let sections:{
        [key:string]:OptionSection
    } = {}

    for(let sec in categories[category].sections){
        let section = categories[category].sections[sec]

        console.log(section.length)

        let [tagGroupRoute,tagGroupInfo] = Object.entries(tagGroups).filter((tg)=>tg[1].id == parseInt(sec))[0]
        Object.assign(sections,{
            [tagGroupRoute]:{
                title:tagGroupInfo.title,
                icon:tagGroupInfo.icon,
                id:tagGroupInfo.id,
                description:tagGroupInfo.description,
                options: tags.filter(tag=>section.includes(tag.id)).map((tag)=>{
                    return {
                        key: tag.title,
                        value: tag.id,
                        id: tag.id,
                        description:tag.description
                    }
                })
            }
        })

            order.update((value)=>{
                if(!value.tags[sec]){
                    value.tags[sec] = undefined
                }
                return value
            })
        if(Object.keys(get(order).tags).length<section.length){
        }
    }
    
    return {sections:sections}
}