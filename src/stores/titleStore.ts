import { writable } from 'svelte/store'

export const title = writable('Metal K')

//cambiar los nombres porque tambien debo hacer stores reactivos para el titulo de perosnalizacion en general
export const titlePersonalization = writable('Categorías')

export const infoPersonalization = writable('Seleccione una de las categorías, así podrémos estar más informados de lo que requiere para su producto.')