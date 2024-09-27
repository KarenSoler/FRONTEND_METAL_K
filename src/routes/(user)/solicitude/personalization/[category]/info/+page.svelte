<script lang='ts'>
//Imports
  import ImageSelector from "@components/admin/ImageSelector.svelte";
  import Field from "@components/Field.svelte";
  import Submit from "@components/Submit.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte"
  import L from 'leaflet'

  // Variables de latitud y longitud iniciales
  let lat = 4.635519054890594;
  let lng = -74.1068586815587;

  // Declarar variables para el mapa y marcador
  let map: L.Map;
  let marker: L.Marker | undefined

  onMount(() => {
    // Estilos de Leaflet
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // // Scripts de Leaflet
    // const leafletScript = document.createElement('script');
    // leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    // leafletScript.onload = () => {

      // Crear el mapa cuando Leaflet ya esté cargado
      map = L.map('map').setView([lat, lng], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Agregar marcador al hacer click en el mapa
      map.addEventListener('click', (e) => {
        if (marker) {
          marker.removeFrom(map);
        }
        marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      });
    //};
    // document.body.appendChild(leafletScript)
  });


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
    <!-- <Field 
        name="address" 
        label="Dirección de trabajo" 
        placeholder="Ingrese su dirección" 
        required="Este campo es obligatorio" 
        {error}
    /> -->

    <div id="map"></div>

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