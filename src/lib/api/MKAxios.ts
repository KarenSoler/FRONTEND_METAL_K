import axios from "axios"
//import { PVE_API_URL } from "$env/static/private";
import { env } from "$env/dynamic/public";

const MKaxios = axios.create({
    baseURL:env.PBE_API_URL
})


// Configurar el interceptor
MKaxios.interceptors.request.use((config) => {
    return config;
});

export {MKaxios}