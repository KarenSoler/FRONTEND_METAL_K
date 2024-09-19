import { PVE_API_URL } from "$env/static/private";
import { MKaxios } from "$lib/api/MKAxios";
import { redirect, type Cookies } from "@sveltejs/kit";

export const actions = {
    default: async({cookies,request}:{cookies:Cookies,request:Request})=>{
        const formData = await request.formData()
        let response: boolean|undefined
        let body:{[key:string]:any} = {}
        formData.forEach((v,k)=>{
            body[k]=v
        })
        await MKaxios.post('/admin/login',body)
        .then((r)=>{
            cookies.set('current',JSON.stringify(r.data.admin),{path:'/'})
            cookies.set('token',r.data.token,{path:'/'})
            if(r.data.status =='ok') response = true
        })
        .catch((e)=>{
            console.log(e)
            response = false
        })
        if(!response){
            redirect(303,'/admin/enterprise')
        }
    }
}