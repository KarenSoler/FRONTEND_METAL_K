import { MKaxios } from "$lib/api/MKAxios";
import ApiResponse from "$lib/api/ApiResponse";
import { redirect, type Cookies, type RouteData } from "@sveltejs/kit";

export async function load({cookies,route}:{cookies:Cookies,route:RouteData}){
    let pathname = route.id
    const token:string|undefined = cookies.get('token')
    let response = new ApiResponse()
    console.log(token)
    try{
        response.getData((await MKaxios.get(`/admin/${token}`)).data)
    }
    catch(e:any){
        response.getData(e.response.data.detail)
        cookies.delete('token',{path:'/'})
        cookies.delete('current',{path:'/'})
    }

    response.isOk(()=>{
        if(pathname.match(/^.*\/\(entrance\)\//)) redirect(307,'/admin/enterprise')
    },  
    ()=>{
        if(pathname.match(/^.*\/\(session\)\//)) redirect(307,'/admin/login')
    })
}