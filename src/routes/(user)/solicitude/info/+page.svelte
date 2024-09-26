<script lang='ts'>
  import ImageSelector from "@components/admin/ImageSelector.svelte";
  import Field from "@components/Field.svelte";
  import Submit from "@components/Submit.svelte";
  import { order } from "@stores/order";
  import { get } from "svelte/store";

//Imports

import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

//Imports

//States

//Data catching
    let solicitude:Writable<{[key:string]:any}> = getContext('solicitude')

    solicitude.subscribe((value)=>{
        console.log(value)
    })

    console.log(get(order))


//Functions

//Rective
//console.log(data.order)

</script>


<form class="form-container">
    <h2>Ingrese sus datos</h2>

    <Field 
        name="name" 
        label="Nombre" 
        placeholder="Ingrese su nombre y apellido" 
        required="Este campo es obligatorio" 
    />
    <Field 
        name="phone" 
        label="Número de teléfono" 
        placeholder="Ingrese su número de teléfono" 
        regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
        required="Este campo es obligatorio" 
        logic={(value) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
    />
    <Field 
        name="address" 
        label="Dirección de trabajo" 
        placeholder="Ingrese su dirección" 
        required="Este campo es obligatorio" 
    />

    <ImageSelector name="planes" class="planes-attacher" label="Planos"/>

    <label for="planes"> ¿Desea agendar una cita?
        <input type="checkbox" id="planes" name="planes" value="planes">
    </label>

    <Submit>Enviar</Submit>
</form>

<style lang='sass' global>
//Imports
@use 'src/lib/styles/user/palete' as palete
@use 'src/lib/styles/admin/elements' as elements
//Variables

//Styles


.form-container
    @include elements.section()

    background: palete.$u-container

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