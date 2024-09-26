import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { fail, type Cookies } from "@sveltejs/kit"

export const actions = {
    default: async({request,cookies}:{request:Request,cookies:Cookies})=>{
        const formData = await request.formData()
        let response = new ApiResponse<any>()
        try{
            console.log(formData.get('branch'))
            response.getData((await MKaxios.put('/enterprise',formData,{
                headers:{
                    Authorization:'Bearer '+cookies.get('token')
                }
            })).data)
        }
        catch(e:any){
            //! If raising a Exception by reading data from undefined, it's could be here
            //console.log(e)
            // response.getData(e.response.data.detail)
            // console.log(response.result)
            return fail(400,{})
        }
    }
}