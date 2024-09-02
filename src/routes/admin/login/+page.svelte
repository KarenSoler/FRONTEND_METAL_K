<script lang='ts'>
    import Tester from "$lib/components/Tester.svelte";
</script>

<div class="container">
    <Tester --width={"40em"} --color={"#0000FF"} --height={"auto"} class={'form'}>
        <h1> Form</h1>
        <Tester --width={"90%"} --color={"#2FFF"} --height={"3.5em"}>Input</Tester>
        <Tester --width={"90%"} --color={"#2FFF"} --height={"3.5em"}>Input</Tester>
        <Tester --width={"5em"} --color={"#2FFF"} --height={"3em"}>Submit</Tester>
    </Tester>
</div>

<style lang='sass' global>

.container
    display: flex
    justify-content: center
    align-items: center
    height: 100vh    // Ocupa toda la altura de la ventana
    background-color: #f0f0f0 

h1
    text-align: center

.form
    display: flex

    justify-content: center
    align-items: center
    background: #FFFFAA

    padding: 2em


$width: var(--width)
$height: var(--height)
$color: var(--color)

.tester
    display: inline-block
        
    width: $width
    height: $height

    border-color: $color

    border-width: 5px
    border-style: solid

    margin: 20px

</style>