<script lang='ts'>
    let disabled:boolean = false
    let formaction:string = ""

    export {
        disabled,
        formaction
    }
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

button
    width: 50%
    height: 40px
    font: 1em Nunito

    border-radius: 10px

    border: palete.$button-border
    background: palete.$button

    transition: background 0.5s ease-in-out

    &:hover
        background: palete.$button-hover
            
</style>

