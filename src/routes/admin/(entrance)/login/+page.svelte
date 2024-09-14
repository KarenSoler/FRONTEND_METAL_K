<script lang='ts'>
    import Field from "@components/Field.svelte";
    import Submit from "@components/Submit.svelte";
</script>
<main>
    <form class="form-container">
        <h1>Ingrese sus datos</h1>
        <Field 
            name="phone" 
            label="Número de teléfono" 
            placeholder="Ingrese su número de teléfono" 
            regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
            required="Este campo es obligatorio" 
            logic={(value) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
        />

        <Field 
            name="password" 
            label="Contraseña" 
            placeholder="Ingrese la contraseña" 
            required="Este campo es obligatorio" 
        />
        <a >¿Ha olvidado su contraseña?</a>
        <Submit>Enviar</Submit>
    </form>
</main>

<style lang='sass' global>
    @use 'src/lib/styles/media' as media
    @use 'src/lib/styles/admin/palete' as palete
    @use 'src/lib/styles/admin/elements' as elements


    main
        position: relative

        display: flex
        justify-content: center
        align-items: center

        width: 100vw
        height: calc( 100vh - 6em)

        @include media.by-max-width(460px)
            height: calc( 100vh - 7em)
            

        .form-container
            @include elements.section()

            display: flex
            justify-content: center
            align-items: center
            flex-direction: column
            flex-wrap: wrap

            width: 50%
            max-width: 30em
            min-width: 20em
            
            margin-bottom: 40px
            gap: 20px

            padding: 2em

            input 
                color: palete.$text

            a
                @include elements.text-link()

</style>