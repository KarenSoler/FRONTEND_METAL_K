<script lang='ts'>
	import {page} from '$app/stores'
	import logo from '$lib/images/metalK_logo.svg'
	import header_config from '$lib/jsons/header.json'
	
	//Typing header_config
	let modules:Array<HeaderModule> = header_config.modules.map((module)=>{
		return module
	})
	
</script>
	
<header>
	<div class='logo'>
		<picture>
			<img src={logo} alt='logo'/>
		</picture>
		<div class='dashboard_title'>
			<h1>METAL K</h1>
			<span>Admin dashboard</span>
		</div>
	</div>
	<!-- Conditional menu printing -->
	{#if modules.length != 0}
		<nav class='menu'>
				{#each modules as module}
					<a href={module.route}>
						<span>
							{module.name}
						</span>
					</a>
				{/each}
		</nav>
	{/if}

</header>
	
<style lang='sass'>
@use 'src/lib/styles/media' as media
@use 'src/lib/styles/admin/palete' as palete


header
	position: sticky
	top:0
	right: 0
	z-index: 10

	width: 100vw
	min-height: 6em
	height: auto

	background: palete.$main-ol

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
			display: flex
			flex-direction: column

			height: max-content
	
			margin-left: 1em
	
			color: palete.$contrast-ol
			font-family: Cabin

			h1
				font-size: 2.2em
				color: palete.$hight-primary
			
		
	.menu
		position: absolute
		top: 0
		right: 0
	
		display: flex
		flex-direction: row

		gap: 0.1em

		background: linear-gradient(palete.$main-ol 10%,palete.$secondary-ol 50%,palete.$main-ol 90%)
		a
			display: flex
	
			justify-content: center
			align-items: center
	
			height: 6em
			width: 6em
	
	
			background: palete.$main-ol
	
			color: palete.$contrast-ol
			font-family: Nunito
	
			transition: background 1s ease-in-out, color 1s ease-in-out
		
			&:hover
				background: palete.$hover-ol

				color: palete.$contrast-ol

				transition: background 0.5s ease-in-out, color 0.5s ease-in-out
			
			&:active 
				background: palete.$active-ol
				
				color: palete.$uncontrast-ol

	//Responsive for mobile
	@include media.by-max-width(460px)
		display: flex
		flex-direction: column
		align-items: center

		padding-top:0.5em

		.logo
			position: relative
			left: 0
			top: 0

			display: flex
			justify-content: left
			align-items: center
			flex-direction: column
			flex-wrap: nowrap

			width: 100%
			height: 7em

			text-align: center

			picture
				height: fit-content
				width: fit-content

			img
				width: 3em
			
			.dashboard_title
				position: relative
				bottom: 0.5em

				gap:0
				margin: 0
			
				h1
					font-size: 1.5em
				
				span
					position: relative
					bottom: 0.5em
					font-size: 0.8em
		.menu
			position: relative

			display: flex
			justify-content: center
			flex-direction: row

			width: fit-content
			height: min-content

			a
				height: min-content

				padding: 0.5em 1em

				font-size: 0.8em

</style>
