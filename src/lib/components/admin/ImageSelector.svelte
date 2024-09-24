<script lang='ts'>
    //Imports
    import plus from '$lib/images/pluss.svg'
    import { writable } from 'svelte/store';

    //States
    let unique:boolean = false
    let alt: string = 'image'
    let defaultValue: Array<string>|string|undefined = undefined
    let src = writable<string[]>([])
    let accept: string = '.png'
    let label:string = ''
    let name:string
    let id:string = ''
    let files = writable<Array<any>>([])
    let JSONFiles:string 

    //External style setting
    let externalClass:string|undefined = undefined

    //Functions
    function imageTaken(e:Event){
        //let images:string[]=[]
        src.set([])
        //@ts-ignore
        if(e.target.files){
            //@ts-ignore
            for(let f of e.target.files){
                const reader = new FileReader()
                reader.onload = ((e:any)=>{
                    //images.push(e.target.result)
                    //src.set(images)
                    src.update((value)=>{
                        value.push(e.target.result)
                        return value
                    })
                })
                reader.readAsDataURL(f)
            }
        }
    }
    
    //Rective
    $:  if(!id) id = name

    $: src.update((value)=>{
        let images = value
        if(defaultValue && value.length==0){
            if(typeof defaultValue == 'string'){
                images.push(defaultValue)
            }
            else{
                for(let d of defaultValue){
                    images.push(d)
                }
            }
        }
        return images
    })

    src.subscribe((srcs)=>{
        files.set(srcs)
    })

    files.subscribe(async (value)=>{
        JSONFiles = JSON.stringify(value)
    })

    //Props
    export{
        name,
        label,
        defaultValue as default,
        unique,
        externalClass as class
    }
</script>
<div class={externalClass} class:attacher-container={true}>
    <input type="hidden"  bind:value={JSONFiles}   {name}/>
    {#if label}
        <label for={name}>{label}</label>
    {/if}
    <div class="image-attacher">
        {#if $src.length>0}
            {#if unique}
                <img class="image-added unique" src={$src[0]} alt="attached"/>
            {:else}
                <div class="image-lister">
                    {#each $src as i}
                        <img class="image-added" src={i} alt="attached"/>
                    {/each}
                </div>
            {/if}
        {:else}
            <img src={plus} {alt} class="add-icon centered"/>
        {/if}
        <input type="file" on:change={imageTaken} multiple={!unique} {accept}/>
    </div>
</div>


<style lang='sass'>
//Imports
@use 'src/lib/styles/admin/palete' as palete
//Variables

//Styles

.attacher-container
    display: flex
    flex-direction: column
    justify-content: start
    gap:0.25em

    width: 100%
    height: 100%

.image-attacher
    position: relative

    display: flex

    width: 100%
    height: 90%

    overflow-y: scroll

    padding: 5%

    background: palete.$input-bg

    border-radius: 10px
    border-color: palete.$section-border
    border-width: 2px
    border-style: solid
    
    .image-lister
        display: flex
        justify-content: start
        align-items: flex-start
        flex-wrap: wrap
        gap: 1em

        width: 100%
        height: 1min-content

        padding: 0.5em



    .image-added
        display: flex
        object-fit: cover

        width: 4.5em
        height: 4.5em

        border-radius: 0.5em

    .unique
        position: relative

        width: 100%
        height: 100%

    .add-icon 
        width: 4em
        height: 4em

    input
        position: absolute
        top:0
        right: 0
        z-index: 3

        opacity: 0

        width: 100%
        height: 100%
</style>