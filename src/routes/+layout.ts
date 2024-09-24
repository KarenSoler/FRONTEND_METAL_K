import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { fail } from "@sveltejs/kit"


export async function load(){
    let response = new ApiResponse<Enterprise>()
    try{
        response.getData((await MKaxios.get('/enterprise')).data)
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
