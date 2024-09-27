<script lang='ts'>
    import { writable } from 'svelte/store';
    import image_list from "$lib/jsons/imageUser.json"
    import feature_list from "$lib/jsons/productInfo.json"
    import { onMount } from 'svelte';

    
    let images:Array<Product> = image_list.images.map((image) => {
        return image
    })

    //@ts-ignore
    let categories:Array<Category> = feature_list.categories

    let tags:Array<Tags> = feature_list.tags.map((tag) => {
        return tag
    })

    // Producto seleccionado para mostrar en el modal (empieza en nulo)
    let selectedImage: Product | null = null
    
    // Controla si se puede ver el modal 
    let showModal: boolean = false
    

    // //Variable que asigna un estado "cerrado" a la información expansible
    // let expandedImage: number | null = null

    // //metodo para colapsar la tarjeta comparando el id de una imagen expandida (expandedImage) con el id de la imagen que unopase y quiera colapsar (si son iguales toma como que está abierta y se colapsa)
    // //El toggle es porque alterna entre estados, si no cumple la condición, en lugar de colapsarla, la expande
    // function toggleImage(id: number) {
    //     expandedImage = expandedImage === id ? null : id
    // }

    // Función para abrir el modal con los detalles de la imagen seleccionada
    function openModal(image: Product) {
        selectedImage = image;
        showModal = true;
    }

    // Función para cerrar el modal
    function closeModal() {
        selectedImage = null;
        showModal = false;
    }

    // Obtener el nombre de la categoría basado en el ID
    function getCategoryName(categoryId: number) {
        let category = categories.find(cat => cat.id === categoryId)
        return category ? category.name : 'Categoría no encontrada'
    }

    // Obtener los tags asociados a la imagen basado en el array de IDs
    function getTags(tagIds: Array<number>) {
        return tagIds.map(tagId => {
            let tag = tags.find(t => t.id === tagId)
            return tag ? tag.title : 'Tag no encontrado'
        }).join(', ')
    }

    function getImages(imgIds: Array<number>): Array<string> {
    return imgIds.map(imgId => {
        let img = images.find(i => i.id === imgId);
        return img ? img.images[0] : 'Imagen no encontrada';  // Retorna la primera imagen si existe
    })

   
}
</script>

<!-- Tarjeta/Imagen de producto -->
<div>
    {#if images.length != 0}
        {#each images as image}
            <div class="image-container" on:click={() => openModal(image)}>
                <figure class="image-item">
                    <img class="image-product" src={Array.isArray(image.images) ? image.images[0] : image.images} alt={getCategoryName(image.category)}>
                </figure>
            </div>
        {/each}
    {/if}

  <!-- Modal para mostrar información del producto seleccionado -->
  {#if showModal && selectedImage}
  <div class="modal-overlay" on:click={closeModal}>
      <div class="modal-content" on:click|stopPropagation>

        <ul class="carousel">
            {#each images as image}
                <li>
                    <img class="image-carousel" src={Array.isArray(image.images) ? image.images[0] : image.images} alt={getCategoryName(selectedImage.category)}>
                </li>
            {/each}
        </ul>
        
        <div>
          <h3>{getCategoryName(selectedImage.category)}</h3>
        </div>

          <h5>Precio</h5>
          <p>{selectedImage.price}</p>
          <h5>Tiempo</h5>
          <p>{selectedImage.time} días</p>
          <h5>Características</h5>
          <p>{getTags(selectedImage.tags)}</p>

          <div>
            <button on:click={closeModal}>Cerrar</button>
          </div>
          
      </div>
  </div>
{/if}
</div>


<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/user/palete' as palete

// .image-space-container
//         display: flex
//         flex-wrap: wrap
//         justify-content: center
//         gap: 1em

.image-container
    position: relative
    width: 12em
    height: 13em 
    display: flex
    display: inline-block
    flex-wrap: wrap
    cursor: pointer
    transition: all 0.3s ease
        


figure
    width: 13em
    height: 13em

    &:hover
        cursor: pointer
        flex-wrap: wrap
        grid-gap: 10em


    

.image-product
    border-radius: 8px
    width: 75%
    height: 75%
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)
    object-fit: cover
    border: 0.3px solid palete.$u-border-container
    z-index: 10



/*img.image-product
        width: 100%
        height: 100%
        object-fit: cover
        border-radius: 8px
        border: 0.3px solid gray
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)
        cursor: pointer*/


.modal-overlay
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, 0.7)
    display: flex
    justify-content: center
    align-items: center
    z-index: 1000
    overflow: scroll


.modal-content
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.5em

    width: 90%
    max-width: 500px

    background-color: palete.$u-container
    padding: 2em
    border-radius: 8px
   
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)
    text-align: left


    h5
        color: palete.$u-title

    p
        color: palete.$u-text

    button
        width: 50%
        height: 40px
        font: 1em Nunito

        border-radius: 10px

        border: palete.$u-button-border
        background: palete.$u-button

        margin-top: 20px

        transition: background 0.5s ease-in-out
        

        &:hover
            background: palete.$u-button-hover
            cursor: pointer

.carousel 
    display: flex
    flex-wrap: nowrap
    overflow-x: auto // Permitir scroll horizontal
    scroll-snap-type: x mandatory
    gap: 10px
    padding-bottom: 10px


.image-carousel 
    flex: 0 0 auto // Evitar que las imágenes se estiren
    width: 100px // Ancho de las imágenes en el carrusel
    height: 100px// Alto de las imágenes
    object-fit: cover
    border-radius: 5px
    border: 0.3px solid palete.$u-border-container
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)
    scroll-snap-align: start// Ajustar la imagen al borde

</style>