import { redirect, type Cookies } from "@sveltejs/kit";

export function load({cookies}:{cookies:Cookies}){
    cookies.delete('token',{path:'/'})
    cookies.delete('current',{path:'/'})
    redirect(303,'/admin/login')
}