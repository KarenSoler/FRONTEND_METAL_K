<script lang='ts'>  // Texto personalizado para el modal
    let triggerModal = false; // Señal para abrir el modal
    let show:boolean = true; // Estado interno para mostrar el modal
    let route:string|undefined = undefined

    // let option = {
    //     onclick:closeModal,
    //     class:'modal-button'
    // }
    // Función para abrir el modal cuando se recibe la señal
    $: if (triggerModal) {
        show = true;
    }

    // Función para cerrar el modal
    function closeModal() {
        show = false; // Cerrar el modal
    }

    export{
        route
    }
</script>

{#if show}
    <div class='modal-bg'>
        <div class="contenedor">
            <p><slot/></p> 
            <span class="modal-options">
                <slot name='option'>
                    {#if route}
                        <a class="modal-button" on:click={closeModal} href={route}>
                            <span>Aceptar</span>
                        </a>
                    {:else}
                        <button class="modal-button" on:click={closeModal}>
                            <span>Cerrar</span>
                        </button>
                    {/if}
                </slot>
            </span>
        </div>
    </div>
{/if}
<style lang='sass'>

@use 'src/lib/styles/palete.sass' as palete
.modal-bg
    position: absolute
    top:0
    left:0

    width: 100vw
    height: 100vh

    background: palete.$modal-bg


    .contenedor
        position: fixed
        top: 50%
        left: 50%

        display: flex
        flex-direction: column
        gap: 0.5em

        background: palete.$container
        padding: 1em
        border-radius: 1em
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2)
        transform: translate(-50%, -50%)
        width: 80%
        max-width: 400px
        text-align: center
        z-index: 1000
        .modal-options
            display: flex
            justify-content: center
            flex-wrap: nowrap
            gap:1em

            width: 100%
            height: fit-content

            .modal-button
                cursor: pointer

                width: 100%

                padding: 0.5em 1em

                background: palete.$button

                border: palete.$button-border
                border-radius: 0.5em

                font-size: 1em

                &:hover
                    background: palete.$button-hover

</style>