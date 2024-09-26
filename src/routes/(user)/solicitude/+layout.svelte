<script lang='ts'>
//Imports
    //Background
    import bg from '$lib/images/user-bg.svg'
    import HeaderForm from '@components/user/HeaderForm.svelte';

//States

//Data catching

//Functions

//Rective

</script>

<HeaderForm/>
<main class="main-page">
    <slot/>
</main>
<style lang='sass'>
//Imports

//Variables

//Styles
main
    position: relative

    display: flex
    justify-content: center
    align-items: center
    
    width: 100vw
    height: calc( 100vh - 6em)

    background-image: url('/src/lib/images/user-bg.svg')
    background-size: cover
    background-origin: border-box
    background-position: 0 50vh
    background-repeat: repeat

    overflow: hidden  

</style>