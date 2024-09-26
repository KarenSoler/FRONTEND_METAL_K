import { writable } from "svelte/store";

export const order = writable<Order>({
    category:undefined,
    tags:{}
})

