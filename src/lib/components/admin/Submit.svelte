<script lang='ts'>
    let disabled:boolean = true
    let formaction:string = ""

    export {disabled,formaction}
</script>

<button type="submit" {formaction}>
    {#if $$slots.default}
        <slot/>
    {:else}
        Submit
    {/if}
</button>

<style lang='sass'>
@use 'src/lib/styles/palete.sass' as palete
@use 'src/lib/styles/admin/elements.sass' as elements

button
    width: 50%
    height: 40px
    font: 1em Nunito

    border-radius: 10px

    @include elements.form-button()  
</style>

