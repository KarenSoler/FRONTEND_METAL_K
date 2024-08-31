<script lang='ts'>
    import Tester from "$lib/components/Tester.svelte";
</script>

<header>
    <Tester --width={"40em"} --color={"#0000FF"} --height={"auto"} class={'form'}>
        <h1> Form</h1>
        <Tester --width={"100%"} --color={"#2FFF"} --height={"4em"}>Input</Tester>
        <Tester --width={"100%"} --color={"#2FFF"} --height={"4em"}>Input</Tester>
        <Tester --width={"5em"} --color={"#2FFF"} --height={"3em"}>Submit</Tester>
    </Tester>
    
</header>

<style lang='sass' global>
.form
    display: flex

    justify-content: center
    align-items: center

    background: #FFFFAA

    padding: 2em


//$width: var(--width)
    //$height: var(--height)
    //$color: var(--color)

    /*.tester
        display: inline-block
        
        width: $width
        height: $height*/

      //  border-color: $color

      //  border-width: 5px
      //  border-style: solid

</style>