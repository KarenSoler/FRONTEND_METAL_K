import { PVE_API_URL } from "$env/static/private";
import { MKaxios } from "$lib/api/MKAxios";
import ApiResponse from "$lib/api/ApiResponse";
import { fail, redirect, type Cookies, type HttpError } from "@sveltejs/kit";
import type { AxiosResponse } from "axios";

export const actions = {
    login: async({cookies,request,url}:{cookies:Cookies,request:Request,url:URL})=>{
        const formData = await request.formData()
        let response:ApiResponse = new ApiResponse()
        try{
            response.getData((await MKaxios.post('/admin/login',formData)).data)    
            cookies.set('current',JSON.stringify(response.result.admin),{path:'/'})
            cookies.set('token',response.result.token,{path:'/'})
        }
        catch(e:any){
            //! If raising a Exception by reading data from undefined, it's could be here
            response.getData(e.response.data.detail)
            return fail(400,{incorrect:true,message:response.message})
        }
        response.isOk(()=>{
            redirect(303,'/admin/enterprise')
        })
    }
}