import { MKaxios } from "$lib/api/MKAxios";
import ApiResponse from "$lib/api/ApiResponse";
import { redirect, type Cookies, type RouteData } from "@sveltejs/kit";

export async function load({cookies,route}:{cookies:Cookies,route:RouteData}){
    let pathname = route.id
    //Cookies
    const anyAdmin = cookies.get('anyAdmin')
    const token = cookies.get('token')
    
    //Token Validation Request
    let response = new ApiResponse()
    try{
        response.getData((await MKaxios.get(`/admin/${token}`)).data)
    }
    catch(e:any){
        response.getData(e.response.data.detail)
        cookies.delete('token',{path:'/'})
        cookies.delete('current',{path:'/'})
    }

    //Redirction 
    response.isOk(()=>{
        if(!anyAdmin)cookies.set('anyAdmin','1',{path:'/'})
        if(pathname.match(/^((.*\/\(entrance\)\/)||(\/))$/)) redirect(307,'/admin/enterprise')
    },  
    ()=>{
        //If there was any log in before
        if(anyAdmin){
            if(pathname.match(/^((.*\/)||(.*\/\(session\)\/).*)$/)) redirect(307,'/admin/login')
        }
        else{
            if(pathname.match(/^((.*\/)||(.*\/\(session\)\/.*))$/)){console.log('?v'); redirect(307,'/HomePortfolio')}
        }
    })

}

///^((.*\/\(user\)\/)||(.*\/\(entrance\)\/))/