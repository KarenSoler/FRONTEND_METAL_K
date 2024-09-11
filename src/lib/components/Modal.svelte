<script lang='ts'>
    export let textModal = 'Texto';  // Texto personalizado para el modal
    export let triggerModal = false; // Señal para abrir el modal

    let showModal = false; // Estado interno para mostrar el modal

    // Función para abrir el modal cuando se recibe la señal
    $: if (triggerModal) {
        showModal = true;
    }

    // Función para cerrar el modal
    function closeModal() {
        showModal = false; // Cerrar el modal
    }
</script>

{#if showModal}
    <div class="contenedor">
        <p>{textModal}</p> 
        <button class="modal-button" on:click={closeModal}>Cerrar</button>
    </div>
{/if}
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