<script lang='ts'>
    //Imports
    import plus from '$lib/images/plus_d.svg'
    import { writable } from 'svelte/store';

    //States
    let unique:boolean = false
    let alt: string = 'image'
    let label:string = ''
    let name:string
    let id:string = ''

    //Catching of files
    let accept: string = '.png'
    let defaultValue: Array<string>|string|undefined = undefined
    let src = writable<string[]>([])
    let files = writable<Array<any>>([])
    let JSONFiles:string 

    //Trying to change the images attached
    let hover:boolean = false

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

    function tryChange(){
        //alert(':v')
        hover=!hover
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
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class:image-attacher={$src.length>0} class:void={$src.length<1} on:mouseenter={tryChange}  on:mouseleave={tryChange}>
        {#if $src.length>0}
            <!-- {#if hover} -->
                <div class="try-change">
                    <span>Haga click para remplazar las imagenes existentes</span>
                </div>
            <!-- {/if} -->
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
            <img src={plus} {alt} class="add-icon"/>
            <span>Haga click o arrastre para subir imagenes</span>
        {/if}
        <input type="file" on:change={imageTaken} multiple={!unique} {accept}/>
    </div>
</div>


<style lang='sass'>
//Imports
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/admin/palete' as palete
//Variables

//Styles

.attacher-container
    display: flex
    flex-direction: column
    justify-content: start
    gap:0.25em

    box-sizing: border-box

    width: 100%
    height: 100%

    .image-attacher
        display: flex

        width: 100%
        height: 100%
            
        overflow-y: scroll

        border-radius: 10px
        border-color: palete.$section-border
        border-width: 2px
        border-style: solid

        &:hover
            .try-change
                width: 100%
        
        .try-change
            position: sticky
            top: 0
            left: 0
            z-index: 2

            display: flex
            justify-content: center
            align-items: center

            width: 0
            height: 100%

            overflow: hidden

            color: palete.$input-placeholder

            transition: width 1s ease-in-out

            span
                width: 60%
                min-width: 200px

        .image-lister
            display: flex
            justify-content: start
            align-items: flex-start
            flex-wrap: wrap
            gap: 1em

            width: 100%
            height: 100%

            padding: 5%

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

    .void
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap:0.5em

        overflow: hidden
        
        border-style: dashed
        border-color: transparent

        color: palete.$input-placeholder
        
        .add-icon 
            width: 4em
            height: 4em

            @include elements.icon-theming()


    .void, .image-attacher
        position: relative

        width: 100%
        height: 90%

        background: palete.$input-bg

        border-radius: 10px
        border-width: 2px

        transition: border-color 0.5s ease-in-out

        &:hover
            background: palete.$hight-bg

            border-color: palete.$touch-hover

        input
            position: absolute
            top:0
            right: 0
            z-index: 3

            opacity: 0

            width: 100%
            height: 100%

</style>