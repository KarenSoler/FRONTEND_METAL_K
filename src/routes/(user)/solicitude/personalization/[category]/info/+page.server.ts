

import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { order } from "@stores/order"
import { fail, redirect } from "@sveltejs/kit"
import { get } from "svelte/store"

export const actions = {
    default: async({request}:{request:Request})=>{
        const formData = await request.formData()
        formData.append('personalization',JSON.stringify(get(order)))
        formData.append('visit',formData.get('visit')?"1":"0")
        
        let response = new ApiResponse()
        try{
            response.getData((await MKaxios.post('/solicitude',formData)).data)
        }
        catch(e:any){
            //! If raising a Exception by reading data from undefined, it's could be here
            response.getData(e.response.data.detail)
            console.log(e)

            return fail(400,{})
        }
        response.isOk(()=>{
            redirect(307,'/HomePortfolio')
        })
    }
}