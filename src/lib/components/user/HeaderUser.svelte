<script lang='ts'>
	import logo from '$lib/images/metalK_logo.svg'
	import { title } from '../../../stores/titleStore'
</script>
    
<header>
	<div class='logo'>
		<picture>
			<img src={logo} alt='logo'/>
		</picture>
	</div>
	<div class='dashboard_title'>
    	<h1>{$title}</h1>
	</div>
</header>
    
<style lang='sass'>
@use '../../styles/user/palete' as palete

header
	position: sticky
	z-index: 10

	min-height: 6em
	width: 100%
	height: auto

	//padding: 1em 2em
	background: palete.$u-header
	
    
.logo
	position: absolute
	top: 1em
	left: 2em
        
	display: flex
	flex-direction: row
	flex-wrap: wrap
        
	height: 4em
        
	font-family: Cabin
    
	img
		height: 4em
		width: 4em
            
.dashboard_title
	height: max-content
	
	margin-left: 1em
        
	color: palete.$u-sub-header
	font-family: Cabin

h1
	margin: 0
	text-align: center
	color: palete.$u-sub-header
	padding-top: 35px


</style>