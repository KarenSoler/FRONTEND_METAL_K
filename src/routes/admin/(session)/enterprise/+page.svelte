<script lang='ts'>
//Imports
  import ImageSelector from "@components/admin/ImageSelector.svelte";
  import logo from "$lib/images/metalK_logo.svg"
  import Field from "@components/Field.svelte";
  import Submit from "@components/admin/Submit.svelte";
  import ContactManager from "@components/admin/ContactManager.svelte";
//States

//Data catching

//Functions

//Rective

</script>

<form class='enterprise-form' method="POST">
    <ImageSelector unique name='logo' label='Logo' class='attacher-logo-i'/>
    <Field name='branch' label='Marca' required class='branch-i'/>
    <Field name='slogan' label='Slogan' required class='slogan-i'/>
    <Field name='description' label='¿Quienes somos?' required textarea class={'who-i'}/>
    <ImageSelector name='enterprise_imgaes' label='Imagenes empresariales' class='attacher-enterprise-i'/>
    <ContactManager class='contacts-i'/>
    <Submit class="keep">Guardar</Submit>
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
    grid-template-rows:  5em 5em 20em 2em 
    gap: 1.5em

    width: auto
    height: 90%

    padding: 2em

    label
      font-weight: 700 !important
      color: palete.$hight-primary !important

    .attacher-logo-i
      grid-row: 1 / span 2

    .slogan-i
      grid-column: 2  
      grid-row: 2

    .who-i
      grid-column: 3  
      grid-row: 1 / span 2
    
    .attacher-enterprise-i
      grid-column: 3

    .contacts-i
      grid-column: 1 / span 2  
      grid-row: 3 / span 2

    .keep
      width: 100%



</style>