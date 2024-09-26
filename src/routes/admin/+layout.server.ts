import type { Cookies } from "@sveltejs/kit";

export function load({cookies}:{cookies:Cookies}){
    //cookies.delete('current',{path:'/'})
    const current = cookies.get('current')
    if(current){
        return {currentAdmin:JSON.parse(current)}
    }
    else{
        return {currentAdmin:undefined}
    }
}