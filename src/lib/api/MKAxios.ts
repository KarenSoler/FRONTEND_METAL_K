import axios from "axios"
import { PVE_API_URL } from "$env/static/private";

const MKaxios = axios.create({
    baseURL:PVE_API_URL
})


// Configurar el interceptor
MKaxios.interceptors.request.use((config) => {
    return config;
});

export {MKaxios}