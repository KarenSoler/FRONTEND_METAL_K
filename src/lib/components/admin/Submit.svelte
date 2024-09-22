<script lang='ts'>
    let disabled:boolean = false
    let formaction:string|undefined = undefined

    //External style setting
    let externalClass:string|undefined = undefined

    export {
        disabled,
        formaction,
        externalClass as class
    }
</script>

<button type="submit" {formaction} {disabled}  class={externalClass}>
    {#if $$slots.default}
        <slot/>
    {:else}
        Submit
    {/if}
</button>

<style lang='sass'>
@use 'src/lib/styles/admin/elements.sass' as elements
@use 'src/lib/styles/admin/palete.sass' as palete

button
    width: 50%
    height: 40px
    font: 1em Nunito

    border-radius: 10px
    
    color: palete.$text

    @include elements.form-button()  
</style>

