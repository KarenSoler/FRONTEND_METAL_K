import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import { fail, redirect, type Cookies } from "@sveltejs/kit"

export const actions = {
    new_product: async({request,cookies}:{request:Request,cookies:Cookies})=>{
        const formData = await request.formData()
        //console.log(formData)
        let response = new ApiResponse()
        try{
            response.getData((await MKaxios.post('/products',formData,{
                headers:{
                    Authorization:'Bearer '+cookies.get('token')
                }
            })).data)
        }
        catch(e:any){
            //! If raising a Exception by reading data from undefined, it's could be here
            
            //response.getData(e.response.data.detail)
            console.log(e)
            return fail(400,{})
        }
        response.isOk(()=>{
            redirect(303,'./')
        })
    }
}