<script lang='ts'>
    //Imports
    import plus from '$lib/images/pluss.svg'
    import { writable } from 'svelte/store';

    //States
    let unique:boolean = false
    let alt: string = 'image'
    let src = writable<string[]>([])
    let accept: string = '.png,.jpg,.svg'

    //Functions
    function imageTaken(e:Event){
        let images:string[]=[]
        //@ts-ignore
        if(e.target.files){
            //@ts-ignore
            for(let f of e.target.files){
                const reader = new FileReader()
                reader.onload = ((e:any)=>{
                    images.push(e.target.result)
                    src.set(images)
                })
                reader.readAsDataURL(f)
            }
        }
    }

    src.subscribe((value) => {
        console.log(value);
    });

    //Rective

    //Props
    export{
        unique
    }
</script>

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

<style lang='sass'>
//Imports
@use 'src/lib/styles/palete' as palete
//Variables

//Styles
    
.image-attacher
    position: relative

    display: block

    width: 100%
    height: 100%

    padding: 5%

    background: palete.$input

    border-radius: 1em 
    
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
        width: 5em
        height: 5em
        object-fit: cover

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

        width: inherit
        height: inherit
</style>