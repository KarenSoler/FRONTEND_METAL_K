<script lang='ts'>
    import Field from "@components/Field.svelte";
    import Submit from "@components/admin/Submit.svelte";

</script>

<form class="form-container">
    <h1>¿Olvidaste tu contraseña?</h1>

    <p>Escribe aquí tu número de telefono asociado a tu cuenta para recordartelo</p>
    <Field 
        name="phone" 
        label="Número de teléfono" 
        placeholder="Ingrese su número de teléfono" 
        regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
        required="Este campo es obligatorio" 
        logic={(value) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
    />

    <Submit>Enviar</Submit>
</form>

<style lang='sass' global>
@use 'src/lib/styles/palete' as palete
@use 'src/lib/styles/admin/elements' as elements

.form-container
    @include elements.section()
    @include elements.center-form()

    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    gap: 20px

    width: 50%
    max-width: 30em
    min-width: 20em
    
    margin-bottom: 40px

    padding: 2em
</style>