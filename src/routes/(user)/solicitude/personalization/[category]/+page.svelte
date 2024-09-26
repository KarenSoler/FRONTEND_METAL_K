<script lang='ts'>
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

//Imports

//States

//Data catching
    let solicitude:Writable<{[key:string]:any}> = getContext('solicitude')

    solicitude.subscribe((value)=>{
        console.log(value)
    })

//Functions

//Rective

</script>


<style lang='sass'>
//Imports

//Variables

//Styles

</style>