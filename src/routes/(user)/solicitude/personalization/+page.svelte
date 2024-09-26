<script lang='ts'>

import { get } from 'svelte/store'
import HeaderForm from '@components/user/HeaderForm.svelte'
import {titlePersonalization, infoPersonalization} from '../../../stores/titleStore'
import {titleFeatures, infoFeatures} from "../../../stores/titleStore"
import {selectedCategories, availableTags, selectedTags, selectedGroup} from "../../../stores/featureStores"
import PersonalizationInfo from '@components/user/PersonalizationInfo.svelte'
import Field from "@components/Field.svelte"
import Submit from "@components/Submit.svelte"
import ImageSelector from "@components/admin/ImageSelector.svelte"
import bg from '$lib/images/user-bg.svg'


// Controla si mostrar el formulario
let showForm: boolean = false;

// Verificar si ya hay categorías y tags seleccionados para mostrar el formulario
$: showForm = $selectedCategories !== null && $availableTags.length === 0 && $selectedTags.length > 0

</script>

<HeaderForm/>
<main class="main-page">
    <div class="background" style="background-image: url({bg});">

        <div class="personalization-container">

            <div class="info-section">
                <h2>{typeof $titleFeatures === 'string' ? $titleFeatures : 'Categorías'}</h2>
                <p>{typeof $infoFeatures === 'string' ? $infoFeatures : 'Selecciona una opción para continuar.'}</p>
            </div>

            <PersonalizationInfo/>

              <!-- Mostrar los tags seleccionados
            {#if $selectedTags.length != 0}
            <div class="selected-tags">
                <h3>Tags seleccionados:</h3>
                <ul>
                {#each $selectedTags as tag}
                    <li>{tag.title}</li>
                {/each}
                </ul>
            </div>
            {/if} -->

        </div>

        
         <!-- Mostrar formulario si se han seleccionado categorías y tags -->
         {#if showForm}
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

             <input type="checkbox" id="planes" name="planes" value="planes">
             <label for="planes"> ¿Desea agendar una cita?</label><br>

             <Submit>Enviar</Submit>
         </form>
     {/if}


    </div>
</main>

<style lang='sass' global>
@use 'src/lib/styles/user/palete' as palete
@use 'src/lib/styles/admin/elements' as elements


header
    position: sticky
    top: 0
    left: 0
    width: 100%
    z-index: 100
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) 


main
    position: relative
    overflow: hidden  

.background
    width: 100%
    height: 100%

    background-size: cover
    background-origin: border-box
    background-position: 0 -10vh
    background-repeat: repeat

    //overflow-y: scroll  
    overflow-x: hidden  
    position: relative

.main-page
    height: 100vh
    background: palete.$u-general-bg
    min-height: 120vh


.personalization-container
    justify-content: center
    margin: 40px 80px 
    padding: 40px 0
    border: 2px solid palete.$u-border-container
    background: palete.$u-container
    border-radius: 20px
    z-index: 100
    text-align: center

    h2
        color: palete.$u-general-title
    p 
        color: palete.$u-text
        margin: 30px


.form-container
    @include elements.section()
    @include elements.center-form()

    background: palete.$u-container

    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    justify-content: space-between 
    flex-wrap: wrap

    width: 100%  // Para que el formulario ocupe todo el espacio disponible
    max-width: 30em
    padding: 2em
    gap: 20px   // Espacio entre los campos del formulario y el selector de imágenes

    padding: 2em
    margin-top: 25em

    clear: both

    // Evita que el ImageSelector se aplaste
    .image-attacher
        margin-top: 1.5em

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