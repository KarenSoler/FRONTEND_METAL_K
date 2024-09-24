import { writable } from 'svelte/store'

export const title = writable('Metal K')

//cambiar los nombres porque tambien debo hacer stores reactivos para el titulo de perosnalizacion en general
export const titlePersonalization = writable('Personalización')
export const infoPersonalization = writable('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')


export const titleFeatures = writable('Categorías')
export const infoFeatures = writable('Seleccione una de las categorías, así podrémos estar más informados de sus preferencias.')