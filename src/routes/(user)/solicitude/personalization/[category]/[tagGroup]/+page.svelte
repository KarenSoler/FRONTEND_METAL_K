<script lang='ts'>
//Imports
    import { page } from '$app/stores';
    import OptionList from '@components/user/OptionList.svelte'
    import { order } from '@stores/order.js';
    import { afterUpdate, getContext } from "svelte";
    import type { Writable } from "svelte/store";

//Imports

//States

//Data catching
    let solicitude:Writable<{[key:string]:any}> = getContext('solicitude')

    solicitude.subscribe((value)=>{
        console.log(value)
    })

    afterUpdate(()=>{
        solicitude.set({ege:12})
    })


//States
    let section:OptionSection
    let tagGroup:string
    //Data Catching
    export let data

//Functions

//Rective
    page.subscribe((value)=>{
        tagGroup = value.params.tagGroup
        section = data.sections[tagGroup]
    })

    order.subscribe((value)=>{
        //console.log(value)
    })

    //$: console.log(section)

</script>
    <OptionList {section} name={tagGroup}/>
<style lang='sass'>
//Imports

//Variables

//Styles

</style>