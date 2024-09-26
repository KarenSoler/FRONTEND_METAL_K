<script>

	import {page} from '$app/stores'
	import header_config from '$lib/jsons/header.json'
    
    export let title  = "Personalización"
	let logo = $page.data.enterprise.logo
</script>
<header>
	<div class='logo'>
		<picture>
			<img src={logo} alt='logo'/>
		</picture>
        <div class='dashboard_title'>
			<h1>METAL K</h1>
		</div>
		<div class='dashboard_title'>
			<h2>{title}</h2>
		</div>
	</div>
</header>

<style lang='sass'>
@use '../../styles/media' as media
@use '../../styles/user/palete' as palete
    
  
header
    position: relative
    z-index: 10
    
    min-height: 6em
    height: auto
    background: palete.$u-general-bg
    
    .logo
        position: absolute
        top: 1em
        left: 2em
        
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
        width: 100%  // Para que ocupe todo el ancho del header
        padding-right: 2em
        
        font-family: Cabin
        background: palete.$u-general-bg
    
        img
            height: 4em
            width: 4em
            
        .dashboard_title
            margin-left: 1em
            color: #E0E0E0
            font-family: Cabin

            

            h2
                text-align: right    
                margin-left: auto  // Empuja el título hacia la derecha
                font-size: 1.3em
                margin-right: 50px 

</style>