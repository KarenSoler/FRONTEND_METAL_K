<script lang='ts'>
    import { writable } from 'svelte/store';
	import editIcon from '$lib/images/edit-icon.svg';
    import deleteIcon from '$lib/images/delete-icon.svg';

</script>


<!-- Targeta/Imagen de producto -->
<div class="image-container">
    <picture class="image-item">
        <img class="image-product" src={'https://th.bing.com/th/id/OIP.TONvJ9GlXR_HE9J7gyh6ugHaFj?rs=1&pid=ImgDetMain'} alt={'a'}>
    </picture>
    <div class='product-options'>
        <!-- Opción de editar -->
        <div class="circle edit">
            <img class="icon edit" src={editIcon} alt="edit">
        </div>
        <!-- Opción de eliminar -->
        <div class="circle delete">
            <img class="icon delete" src={deleteIcon} alt="delete">
        </div>
    </div>
</div>



<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/palete' as palete
@use 'src/lib/styles/admin/animation' as animator
@use 'sass:color'

.image-container
    position: relative
    box-sizing: border-box

    width: 100%
    height: 100%

    overflow: visible

    picture
        display: inline-block
        box-sizing: border-box
        width: 100%
        height: 100%
        padding: 1em

    .image-product
        border-radius: 0.5em
        width: 100%
        height: 100%
        object-fit: cover
        border: 2px solid palete.$border-container
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

    .product-options
        position: absolute
        top: 0
        right: 0

        display: flex
        gap: 0.2em

        width: fit-content
        height: auto

        opacity: 0

        transition: opacity 0.5s ease-in-out
        
        .circle
            position: relative
            border-radius: 50%
            width: 2em
            height: 2em
            display: flex
            align-items: center
            justify-content: center
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)

            transition: transform 0.5s ease-in-out

            &:active
                transform: scale(0.9)

            &.edit
                background: palete.$option

            &.delete
                background: palete.$delete-option

        .icon
            width: 50%
            height: 50%
    
    &:hover
        .product-options
            opacity: 100%

</style>