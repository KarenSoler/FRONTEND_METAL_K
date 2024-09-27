import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import type { Cookies } from "@sveltejs/kit"

export const actions = {
    delete_product: async({request,cookies}:{request:Request,cookies:Cookies})=>{
        const formData = await request.formData()
        const id = formData.get('product')
        console.log(id)
        let response= new ApiResponse()
        try{
            response.getData((await MKaxios.delete(`/products/${id}`,{
                headers:{
                    Authorization:'Bearer '+cookies.get('token')
                }
            })).data)
            console.log(response.message)
        }
        catch(e:any){
            console.log(e)
            //! If raising a Exception by reading data from undefined, it's could be here
            response.getData(e.response.data.detail)
        }
    }
}