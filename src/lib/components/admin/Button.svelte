<script lang='ts'>
//Imports

//States
let src:string
let externalClass:string|undefined = undefined
let event:()=>any
let theming:boolean = false
//Functions


//Rective

//Props
export{
    src,
    event,
    externalClass as class,
    theming
}

</script>
<picture class={externalClass} class:image-button={true} class:theming class:icon={src} on:click={event}>
    <img src={src} alt="button_icon"/>
</picture>

<style lang='sass'>
//Imports
@use 'src/lib/styles/palete' as palete
@use 'src/lib/styles/admin/elements' as elements

//Variables

//Styles

.image-button
        width: auto
        height: auto
        
        @include elements.image-button()

.theming
    @include elements.icon-theming


.icon
        width: 100%
        height: 100%

        border-radius: 100%

</style>