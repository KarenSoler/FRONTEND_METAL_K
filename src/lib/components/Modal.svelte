<script lang='ts'>
    export let text = 'Texto';
    
    export let close: () => void = () => {};

    const closeModal = () => { close();} 
</script>

<div class="contenedor">
    <p>{text}</p> 
    <button class="modal-button" on:click={closeModal}>Cerrar</button>
</div>

<style lang='sass'>

@use 'src/lib/styles/palete.sass' as palete

.contenedor
    background: palete.$container
    padding: 1em
    border-radius: 1em
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2)
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 80%
    max-width: 400px
    text-align: center
    z-index: 1000

.modal-button
    background: palete.$button
    border: palete.$button-border
    padding: 0.5em 1em
    margin-top: 1em
    cursor: pointer

    &:hover
        background: palete.$button, 10%

</style>