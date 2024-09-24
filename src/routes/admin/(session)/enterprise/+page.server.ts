import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { fail } from "@sveltejs/kit"

export async function load(){
    let response:ApiResponse = new ApiResponse()
    try{
        response.getData((await MKaxios.get('/enterprise')).data)
        console.log(response)
        return {enterprise:response.result}
    }
    catch(e:any){
        //! If raising a Exception by reading data from undefined, it's could be here
        console.log(e)
        // response.getData(e.response.data.detail)
        // console.log(response.result)
        return fail(400,{})
    }
}

export const actions = {
    default: async({request}:{request:Request})=>{
        const formData = await request.formData()
        console.log(formData)
        let response:ApiResponse = new ApiResponse()
        try{
            response.getData((await MKaxios.put('/enterprise',formData)).data)
            console.log(response)
        }
        catch(e:any){
            //! If raising a Exception by reading data from undefined, it's could be here
            console.log(e)
            // response.getData(e.response.data.detail)
            // console.log(response.result)
            return fail(400,{})
        }
    }
}