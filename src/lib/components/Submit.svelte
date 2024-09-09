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
    button
        width: 50%
        height: 40px
        font: 1em Nunito

        border-radius: 10px

        border: none
        background: #6D89D6

        color: #ffff

        transition: background 0.5s ease-in-out

        &:hover
            background: #0189FF
                
</style>

