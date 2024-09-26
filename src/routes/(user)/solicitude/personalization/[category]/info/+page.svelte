<script lang='ts'>
//Imports
  import ImageSelector from "@components/admin/ImageSelector.svelte";
  import Field from "@components/Field.svelte";
  import Submit from "@components/admin/Submit.svelte";
  import { writable } from "svelte/store";

//Imports

//States
    export const error = writable<boolean>(false)

//Data catching
    


//Functions

//Rective

</script>


<form class="form-container" method="post">
    <h2>Ingrese sus datos</h2>

    <Field 
        name="name" 
        label="Nombre" 
        placeholder="Ingrese su nombre y apellido" 
        required="Este campo es obligatorio" 
        {error}
    />
    <Field 
        name="phone" 
        label="Número de teléfono" 
        placeholder="Ingrese su número de teléfono" 
        regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
        required="Este campo es obligatorio" 
        logic={(value) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
        {error}
    />
    <Field 
        name="address" 
        label="Dirección de trabajo" 
        placeholder="Ingrese su dirección" 
        required="Este campo es obligatorio" 
        {error}
    />

    <ImageSelector name="planes" class="planes-attacher" label="Planos"/>

    <label for="visit"> ¿Desea agendar una cita?
        <input type="checkbox" id="visit" name="visit">
    </label>

    <Submit disabled={$error}>Enviar</Submit>
</form>

<style lang='sass' global>
//Imports
@use 'src/lib/styles/user/palete' as palete
@use 'src/lib/styles/admin/elements' as elements
//Variables

//Styles


.form-container
    @include elements.section()

    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    justify-content: space-between 
    flex-wrap: wrap
    gap: 1em

    width: 100%  // Para que el formulario ocupe todo el espacio disponible
    max-width: 30em
    padding: 2em

    padding: 2em

    clear: both

    // Evita que el ImageSelector se aplaste

    input 
        color: palete.$u-text

    a
        @include elements.text-link()
    label
        color: palete.$u-text
        // margin: 30px
        
    .planes-attacher
        height:10em
</style>