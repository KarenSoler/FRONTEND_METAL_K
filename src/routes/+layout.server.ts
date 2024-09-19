import { MKaxios } from "$lib/api/MKAxios";
import { redirect, type Cookies, type RouteData } from "@sveltejs/kit";
import axios from "axios";

export async function load({cookies,route}:{cookies:Cookies,route:RouteData}){
    let pathname = route.id
    const token:string|undefined = cookies.get('token')
    let response: {[key:string]:any} = {}
    try{
        response = (await MKaxios.get(`/admin/${token}`)).data
    }
    catch(e){
        cookies.delete('token',{path:'/'})
        cookies.delete('current',{path:'/'})
    }
    
    if(response.status == 'error'){
        if(pathname != '/admin/(entrance)/login')
            redirect(307,'/admin/login')
    }
    
}