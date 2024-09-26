<script lang='ts'>
  import { afterUpdate } from "svelte";

    //Imports

    //States
    let theme:string
    let dark:string
    let light:string

    //Functions

    //Rective
    afterUpdate(()=>{
        theme=window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })
    //Props
    export{
        dark,
        light
    }
</script>



<style lang='sass'>
//Imports

//Variables

//Styles

</style>