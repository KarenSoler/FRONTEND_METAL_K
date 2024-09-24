import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { fail, type Cookies } from "@sveltejs/kit"

// export async function load(){
//     // let response:ApiResponse = new ApiResponse()
//     // try{
//     //     response.getData((await MKaxios.get('/enterprise')).data)
//     //     console.log(response)
//     //     return {enterprise:response.result}
//     // }
//     // catch(e:any){
//     //     //! If raising a Exception by reading data from undefined, it's could be here
//     //     console.log(e)
//     //     // response.getData(e.response.data.detail)
//     //     // console.log(response.result)
//     //     return fail(400,{})
//     // }
// }

export const actions = {
    default: async({request,cookies}:{request:Request,cookies:Cookies})=>{
        const formData = await request.formData()
        let response = new ApiResponse<Enterprise>()
        try{
            response.getData((await MKaxios.put('/enterprise',formData,{
                headers:{
                    Authorization:'Bearer '+cookies.get('token')
                }
            })).data)
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