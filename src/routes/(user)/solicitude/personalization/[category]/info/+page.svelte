<script lang='ts'>
  //Imports
    import ImageSelector from "@components/admin/ImageSelector.svelte";
    import Field from "@components/Field.svelte";
    import Submit from "@components/Submit.svelte";
    import { writable } from "svelte/store";
    import { onMount } from "svelte";
    import maplibregl from 'maplibre-gl'
  
    // Variables de latitud y longitud iniciales
    let lat = 4.635519054890594
    let lng = -74.1068586815587
  
    // Declarar variables para el mapa y marcador
    let map: maplibregl.Map
    let marker: maplibregl.Marker | undefined
  
    onMount(() => {
        // Cargar los estilos de MapLibre GL
        const maplibreCSS = document.createElement('link')
        maplibreCSS.rel = 'stylesheet'
        maplibreCSS.href = 'https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css'
        document.head.appendChild(maplibreCSS)
  
        // Crear el mapa usando MapLibre GL
        map = new maplibregl.Map({
            container: 'map', // ID del contenedor del mapa
            style: 'https://demotiles.maplibre.org/style.json', // Estilo del mapa
            center: [lng, lat], // Coordenadas iniciales
            zoom: 13 // Nivel de zoom
        })
  
        // Agregar evento de clic para colocar marcadores en el mapa
        map.on('click', (e: maplibregl.MapMouseEvent & maplibregl.EventData) => {
            if (marker) {
                marker.remove() // Eliminar marcador anterior si existe
            }
            // Crear un nuevo marcador
            marker = new maplibregl.Marker()
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .addTo(map)
        })
    })
  
  //States
      export const error = writable<boolean>(false)
  
  //Data catching
  
  //Functions
  
  //Rective
  
  </script>

<main>
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
  
      <div id="map"></div>
  
      <ImageSelector name="planes" class="planes-attacher" label="Planos"/>
  
      <label for="visit"> ¿Desea agendar una cita?
          <input type="checkbox" id="visit" name="visit">
      </label>
  
      <Submit disabled={$error}>Enviar</Submit>
  </form>
</main>
  <style lang='sass' global>
  //Imports
  @use 'src/lib/styles/user/palete' as palete
  @use 'src/lib/styles/admin/elements' as elements
  //Variables
  
  //Styles

  main 
    overflow: auto

  .form-container
    @include elements.section()

    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    justify-content: space-between 
    flex-wrap: wrap
    gap: 1em

    width: 100%
    max-width: 30em
    padding: 2em

    clear: both

    overflow-y: scroll

    input 
        color: palete.$u-text

    a
        @include elements.text-link()
    label
        color: palete.$u-text

    .planes-attacher
        height: 10em

#map
    width: 100%
    height: 400px
    margin-bottom: 1em
    border: 1px solid #ccc
    overflow: auto  // Permite el scroll si el contenido es más grande
</style>