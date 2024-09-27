import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"
import type { Cookies } from "@sveltejs/kit"


export async function load({params,cookies}:{params:any,cookies:Cookies}){
    let response= new ApiResponse<Product>()
    try{
        response.getData((await MKaxios.get(`/products/${params.id}`,{
            headers:{
                Authorization:'Bearer '+cookies.get('token')
            }
        })).data)
        return {currentProduct:response.result}
    }
    catch(e:any){
        console.log(e)
        //! If raising a Exception by reading data from undefined, it's could be here
        response.getData(e.response.data.detail)
    }
    
}