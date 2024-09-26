<script lang='ts'>
  import { afterNavigate, invalidate, invalidateAll } from '$app/navigation';

//Imports
import AdminHeader from '@admin-components/AdminHeader.svelte'
import { afterUpdate, beforeUpdate, onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
//States
export let data
let user = writable(data.currentAdmin)

setContext('user',user)

$: {
    user.set(data.currentAdmin)
}

//Data catching
//@ts-ignore

// //Functions

afterNavigate(()=>{
  rerunLoadFunction()
})

function rerunLoadFunction() {
    // any of these will cause the `load` function to rerun
    invalidate('app:random');
    invalidate('https://api.example.com/random-number');
    invalidate(url => url.href.includes('random-number'));
    invalidateAll();
}


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
    justify-content: start
    align-items: center

    width: 100vw
    height: calc( 100vh - 6em)

    font-family: Nunito

    @include media.by-max-width(460px)
        top: 9em
        
        height: calc( 100vh - 10em)

</style>