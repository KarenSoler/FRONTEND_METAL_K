<script lang='ts'>
//Imports

  import ImageSelector from "@components/admin/ImageSelector.svelte";
  import logo from "$lib/images/metalK_logo.svg"
  import Field from "@components/Field.svelte";
//States

//Data catching

//Functions

//Rective

</script>

<form class='enterprise-form'>
    <ImageSelector unique name='logo' label='Logo' class='attacher'/>
    <Field name='branch' label='Marca' required/>
    <Field name='slogan' label='Slogan' required class='slogan'/>
</form>

<style lang='sass' global>
//Imports
@use 'src/lib/styles/admin/palete' as palete
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/media' as media
//Variables

//Styles
.enterprise-form
    @include elements.section()
    @include elements.center-form()

    display: grid
    grid-template-columns:  10em 20em 20em
    grid-template-rows:  5em 5em 22em 
    gap: 1.5em

    width: auto
    height: 90%

    padding: 2em

    label
      font-weight: 700 !important
      color: palete.$hight-primary !important

    .attacher
      grid-row: auto / span 2

    .slogan
      grid-column: 2  
      grid-row: 2



</style>