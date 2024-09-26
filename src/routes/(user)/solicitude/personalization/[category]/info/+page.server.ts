
import { order } from "@stores/order"
import { get } from "svelte/store"

export const actions = {
    default: async({request}:{request:Request})=>{
        const formData = await request.formData()
        console.log(get(order))
        // let response:ApiResponse = new ApiResponse()
        // try{
        //     response.getData((await MKaxios.post('url',formData)).data)
        // }
        // catch(e:any){
        //     //! If raising a Exception by reading data from undefined, it's could be here
        //     response.getData(e.response.data.detail)
        //     return fail(400,{})
        // }
    }
}