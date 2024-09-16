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
    
            <!-- Opción de editar -->
            <div class="circle edit">
                <img class="icon edit" src={editIcon} alt="edit">
            </div>
            <!-- Opción de eliminar -->
            <div class="circle delete">
                <img class="icon delete" src={deleteIcon} alt="delete">
            </div>
        </div>
    {/each}
        
    </div>
{/if}




<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/palete' as palete


.image-container
    position: relative
    width: 15em
    height: 15em
    display: inline-block

figure
    width: 15em
    height: 15em
    padding: 20px

.image-product
    border-radius: 15px
    width: 100%
    height: 100%
    border: 2px solid palete.$border-container
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

.circle
    position: absolute
    border-radius: 50%
    width: 45px
    height: 45px
    display: flex
    align-items: center
    justify-content: center
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

    &.edit
        background: palete.$option
        top: 7px
        left: 54% 

    &.delete
        background: palete.$delete-option
        top: 7px
        left: 73%

.icon
    width: 50%
    height: 50%

</style>