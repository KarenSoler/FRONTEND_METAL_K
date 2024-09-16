<script lang='ts'>
//Imports
import AdminHeader from '@admin-components/AdminHeader.svelte'
//States

//Data catching

//Functions

//Rective

</script>

<AdminHeader/>
<main>
    <slot/>

</main>

<style lang='sass'>
@use 'src/lib/styles/media' as media
@use 'src/lib/styles/admin/palete.sass' as palete
//Imports

//Variables

//Styles
main
    position: absolute
    top: 6em

    display: flex
    justify-content: center
    align-items: center

    width: 100vw
    height: calc( 100vh - 6em)

    font-family: Nunito

    @include media.by-max-width(460px)
        top: 7em
        
        height: calc( 100vh - 7em)

</style>