<script lang='ts'>

import HeaderForm from '@components/user/HeaderForm.svelte'
import {titlePersonalization, infoPersonalization} from '../../../stores/titleStore'
import PersonalizationInfo from '@components/user/PersonalizationInfo.svelte'
import bg from '$lib/images/user-bg.svg'


</script>

<header>
    <HeaderForm/>
</header>

<main class="home-page">
    <div class="background" style="background-image: url({bg});">
        <div class="personalization-container">
            <div class="info-section">
                <h2>{typeof $titlePersonalization === 'string' ? $titlePersonalization : 'Título inválido'}</h2>
                <p>{typeof $infoPersonalization === 'string' ? $infoPersonalization : 'Texto inválido'}</p>

            </div>

            <PersonalizationInfo/>
        </div>
    </div>
</main>

<style lang='sass'>
@use '../../../lib/styles/user/palete' as palete

header
    position: sticky
    top: 0
    left: 0
    width: 100%
    z-index: 100
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) 


main
    position: relative
    overflow: hidden  

.background
    width: 100%
    height: 100%

    background-size: cover
    background-origin: border-box
    background-position: 0 -10vh
    background-repeat: repeat

    //overflow-y: scroll  
    overflow-x: hidden  
    position: relative

.home-page
    // display: flex
    // justify-content: center
    // align-items: center
    height: 100vh
    background: palete.$u-general-bg

</style>