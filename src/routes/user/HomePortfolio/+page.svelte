<script lang='ts'>
    import { writable } from 'svelte/store';
    import image_list from "../../../routes/test/image-admin.json";
    import editIcon from '$lib/images/edit-icon.svg';
    import deleteIcon from '$lib/images/delete-icon.svg';

    let images:Array<ImageModule> = image_list.images.map((image)=> {
        return image
    })

</script>


<!-- Targeta/Imagen de producto -->
{#if images.length != 0}
    <div class="image-space-container">
        {#each images as image}
        <div class="image-container">
            <figure class="image-item">
                <img class="image-product" src={image.img} alt={image.tittle}>
            </figure>
        </div>
        {/each}
        
    </div>
{/if}




<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/palete' as palete


.image-container
    position: relative
    width: 12em
    height: 13em
    display: inline-block

figure
    width: 13em
    height: 13em

.image-product
    border-radius: 8px
    width: 75%
    height: 75%
    border: 0.3px solid palete.$border-container
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7)




</style>