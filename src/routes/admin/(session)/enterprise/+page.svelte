<script lang='ts'>
//Imports

  import ImageSelector from "@components/admin/ImageSelector.svelte";

//States

//Data catching

//Functions

//Rective

</script>

<form class='enterprise-form'>
    <ImageSelector unique/>
</form>

<style lang='sass'>
//Imports
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/media' as media
//Variables

//Styles
.enterprise-form
    @include elements.section()
    @include elements.center-form()

    display: grid
    grid-template-columns:  16em 4em

    width: 80%
    height: 90%

    padding: 2em


</style>