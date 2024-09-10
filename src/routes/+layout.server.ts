import { redirect, type Cookies, type RouteData } from "@sveltejs/kit";

export function load({cookies,route}:{cookies:Cookies,route:RouteData}){
    let pathname = route.id
    cookies.set('current',JSON.stringify({name:'Juan'}),{path:'/'})
    console.log(pathname)
    console.log(cookies.getAll())
    const current:string|undefined = cookies.get('current')
    if(current && pathname!='/test'){
        console.log('Hay usuario')
        //redirect(307,'/test')
    }
    else {
        console.log('no hay sesion')
        //redirect(307,'/')
    }
}