<script lang='ts'>
//Imports

  import ImageSelector from "@components/admin/ImageSelector.svelte";

//States

//Data catching

//Functions

//Rective

</script>

<form class='enterprise-form'>
    <ImageSelector/>

</form>

<style lang='sass'>
//Imports
@use 'src/lib/styles/admin/elements' as elements
//Variables

//Styles
.enterprise-form
    @include elements.section()
    @include elements.center-form()

    display: grid
    grid-template-columns: 10em


</style>