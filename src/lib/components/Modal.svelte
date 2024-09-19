<script lang='ts'>  // Texto personalizado para el modal
    let trigger = false; // Señal para abrir el modal
    let show:boolean = true; // Estado interno para mostrar el modal
    let route:string|undefined = undefined
    let error:boolean = false

    //Take external trigger
    $: show = trigger

    // Función para cerrar el modal
    function closeModal() {
        show = false; // Cerrar el modal
    }

    export{
        route,
        trigger
    }
</script>

{#if show}
    <div class='modal-bg'>
        <div class="modal-container">
            <h4 class="modal-title">
                Modal
            </h4>
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
    position: fixed
    top:0
    z-index: 5

    width: 100vw
    height: 100vh

    background: palete.$modal-bg


    .modal-container
        position: fixed
        top: 50%
        left: 50%

        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: center
        gap: 1em

        width: 80%
        max-width: 400px
        min-height: 9em
        height: fit-content

        padding: 1em

        transform: translate(-50%, -50%)

        background: palete.$container
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5)

        border-radius: 1em

        text-align: center

        .modal-title
            position: absolute

            top:0
            left: 0

            width: 100%

            padding: 0.5em 0

            background: palete.$general-tittle
            box-shadow: red 0 2px 0 0px

            border-radius: 1rem 1rem 0 0

            text-align: center
        
        p
            width: 80%
            height: auto
            
            margin-top: 2.5em

            text-align: center
            color: palete.$text

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
                color: palete.$text

                &:hover
                    background: palete.$button-hover

</style>