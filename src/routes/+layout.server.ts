import { MKaxios } from "$lib/api/MKAxios";
import { redirect, type Cookies, type RouteData } from "@sveltejs/kit";
import axios from "axios";

export async function load({cookies,route}:{cookies:Cookies,route:RouteData}){
    let pathname = route.id
    console.log(pathname)
    const token:string|undefined = cookies.get('token')
    let tokenResponse:boolean|undefined = undefined
    await MKaxios.get(`/admin/${token}`)
    .then((r)=>{
        tokenResponse=true
    })
    .catch((e)=>{
        console.log('unvalid')
        cookies.delete('token',{path:'/'})
        cookies.delete('current',{path:'/'})
        tokenResponse=false
    })
    
    if(!tokenResponse){
        if(pathname != '/admin/(entrance)/login')
            redirect(307,'/admin/login')
    }
    
}