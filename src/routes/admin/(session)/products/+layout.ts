import ApiResponse from "$lib/api/ApiResponse"
import { MKaxios } from "$lib/api/MKAxios"


export async function load({request}:{request:Request}){
    let response= new ApiResponse<Array<Product>>()
    try{
        response.getData((await MKaxios.get('/products')).data)
        return {products:response.result}
    }
    catch(e:any){
        //! If raising a Exception by reading data from undefined, it's could be here
        response.getData(e.response.data.detail)
    }
    
}