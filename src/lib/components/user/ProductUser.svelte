<script lang='ts'>
    import { writable } from 'svelte/store';
    import image_list from "../../../lib/jsons/imageUser.json";

    let focus = false
    let images:Array<ImageModule> = image_list.images.map((image)=> {
        return image;  // Cierra correctamente la función de retorno
    })
    

    //Variable que asigna un estado "cerrado" a la información expansible
    let expandedImage: number | null = null

    //metodo para colapsar la tarjeta comparando el id de una imagen expandida (expandedImage) con el id de la imagen que unopase y quiera colapsar (si son iguales toma como que está abierta y se colapsa)
    //El toggle es porque alterna entre estados, si no cumple la condición, en lugar de colapsarla, la expande
    function toggleImage(id: number) {
        expandedImage = expandedImage === id ? null : id;
    }


</script>

<!-- Tarjeta/Imagen de producto --><div>
{#if images.length != 0}
        {#each images as image}
        <!-- <div class="image-space-container"> -->
            <div class="image-container {expandedImage === image.id ? 'expanded' : ''}" on:click={() => toggleImage(image.id)}>
                <figure class="image-item">
                    <img class="image-product" src={image.route} alt={image.category}>
                </figure>

                <!-- Información del producto -->
                {#if expandedImage === image.id}
                <div class="product-info">
                    <h3>{image.category}</h3>

                    <h5>Precio</h5>
                    <p>{image.price}</p>

                    <h5>Tiempo</h5>
                    <p>{image.time}</p>

                    <h5>Características</h5>
                    <p>{image.tags}</p>
                </div>
                {/if}
            </div>
        <!-- </div> -->
        {/each}
{/if}
</div>


<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/palete' as palete

.image-space-container
        display: flex
        flex-wrap: wrap
        justify-content: center
        gap: 1em

.image-container
    position: relative
    width: 12em
    height: 13em 
    display: flex
    flex-wrap: wrap
    transition: all 0.3s ease
        


    &.expanded
        width: 16em
        height: auto
        flex-wrap: wrap
        

figure
    width: 13em
    height: 13em

    &:hover
        cursor: pointer
        flex-wrap: wrap
        grid-gap: 10em

/*img.image-product
        width: 100%
        height: 100%
        object-fit: cover
        border-radius: 8px
        border: 0.3px solid gray
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)
        cursor: pointer*/

.image-product
    border-radius: 8px
    position: relative
    width: 75%
    height: 75%
    object-fit: cover
    border: 0.3px solid palete.$border-container
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)
    z-index: 10

    & .expanded
        shadow:none

    
.focus
    grid-column: auto / span 2
    grid-row: auto /span 2


.product-info
    padding: 1em
    background-color: #f4f4
    border-radius: 8px
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)
    position: absolute
    top: 0  // Alinea al inicio del contenedor
    left: 0
    width: 100% 




</style>