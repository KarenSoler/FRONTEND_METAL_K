<script lang='ts'>
//Imports
    //Components
    import OptionCard from "./OptionCard.svelte";
//States
    let section:OptionSection

    //External class
    let externalClass:string|undefined = undefined

//Rective

//Props
    export{
        section,
        externalClass as class
    }
</script>

<form class:option-section={true} class={externalClass} method="POST">
    <h1><svelte:element this={section.icon}/>{section.title}</h1>
    <p>{section.description}</p>
    <nav class="option-menu">
        {#each section.options as option}
            <OptionCard {option}/>
        {/each}
    </nav>
</form>

<style lang='sass'>
//Imports
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/palete' as palete
//Variables

//Styles
.option-section
    @include elements.section

    display: flex
    flex-direction: column
    align-items: center
    gap: 1em

    width: 80%
    min-width: 15em
    height: fit-content
    max-height: 80%

    padding: 1em 2em


    &>*
        text-align: center
        
    h1
        width: 80%

    p
        color: palete.$text

    .option-menu
        display: flex
        flex-direction: column
        gap: 0.5em
        overflow-y: scroll

    
</style>