<script lang='ts'>
    let external:string|undefined = undefined
    console.log(external)

    export {external as class}
</script>

<div class:tester={true} class={external}>
    <slot/>
</div>


<style lang='sass'>
    $width: var(--width)
    $height: var(--height)
    $color: var(--color)

    .tester
        width: $width
        height: $height

        border-color: $color

        border-width: 2px
        border-style: solid
    
</style>