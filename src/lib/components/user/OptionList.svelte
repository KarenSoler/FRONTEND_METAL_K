<script lang='ts'>
//Imports
    //Components
    import OptionCard from "./OptionCard.svelte";
//States
    let section:OptionSection
//Functions

//Rective

//Props

</script>

<form>
    <h1>{section.title}</h1>
    <nav>
        {#each section.options as option}
            <OptionCard {option}/>
        {/each}
    </nav>
</form>

<style lang='sass'>
//Imports

//Variables

//Styles

</style>