<script lang='ts'>
    import Header from "@components/Header.svelte";
    import Field from "@components/Field.svelte";
    import Submit from "@components/Submit.svelte";
</script>


<header>
    <Header/>
</header>

<main class="main">
    <form class="form-container">
        <h3>Ingrese sus datos</h3>
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
        <Submit>Enviar</Submit>
    </form>

</main>

<style lang='sass' global>
    @use 'src/lib/styles/media' as media


    .main
        position: absolute
        top: 6em

        display: flex
        justify-content: center
        align-items: center

        width: 100vw
        height: calc( 100vh - 6em)

        font-family: Nunito
        background-color: #f4f4f4
        color: #333

        @include media.by-max-width(460px)
            top: 7em
            
            height: calc( 100vh - 7em)

    h3
        color: #6D89D6

    .form-container
        display: flex
        justify-content: center
        align-items: center
        flex-wrap: wrap

        width: 50%
        max-width: 30em
        min-width: 20em
        
        margin-bottom: 40px
        gap: 20px

        padding: 2em

        background: #fefefe

        border-width: 1px
        border-radius: 1em
        border-color: #a0a0a050
        border-style: solid

        box-shadow: #a0a0a050 0px 0px 25px 5px
</style>