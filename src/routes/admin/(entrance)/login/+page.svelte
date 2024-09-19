<script lang='ts'>
    import Field from "@components/Field.svelte";
    import Submit from "@components/admin/Submit.svelte";
    import Modal from '@components/Modal.svelte'
  import { writable } from "svelte/store";

    export let form
    export const error = writable<boolean>(false)
</script>

<form class="form-container" method="POST" action='?/login'>
    <h1>Ingrese sus datos</h1>
    <Field 
        name="phone" 
        label="Número de teléfono" 
        placeholder="Ingrese su número de teléfono" 
        regex={{ pattern: /^[0-9]+$/, message: "Solo se permiten números" }} 
        required="Este campo es obligatorio" 
        logic={(value:string) => value.length < 10 ? "Ingrese como mínimo 10 números" : undefined} 
        error={error}
    />
    <Field 
        name="password" 
        label="Contraseña" 
        placeholder="Ingrese la contraseña" 
        required="Este campo es obligatorio" 
        error={error}
    />
    <a href="/admin/recover-pass">¿Ha olvidado su contraseña?</a>
    <Submit disabled={$error}>Enviar</Submit>
</form>
<Modal trigger={form?.incorrect}>
    {form?.message}
</Modal>

<style lang='sass' global>
@use 'src/lib/styles/media' as media
@use 'src/lib/styles/admin/palete' as palete
@use 'src/lib/styles/admin/elements' as elements

.form-container
    @include elements.section()
    @include elements.center-form()

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