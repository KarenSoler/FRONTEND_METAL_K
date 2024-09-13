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
    
<<<<<<< HEAD
<style lang='sass'>
@use '../styles/media' as media
@use '../styles/palete' as palete


header
    position: relative
    z-index: 10

    min-height: 6em
    height: auto

    background: palete.$header

    .logo
        position: absolute
        top: 1em
        left: 2em
    
        display: flex
        flex-direction: row
        flex-wrap: wrap
=======
    <style lang='sass'>
    @use 'src/lib/styles/palete.sass' as palete

    header
        position: relative
>>>>>>> u/styles
    
        height: 4em
    
<<<<<<< HEAD
        font-family: Cabin

        img
=======
        background: palete.$header
    
        .metalK_logo
            position: absolute
            top: 1em
            left: 2em
        
            display: flex
            flex-direction: row
            flex-wrap: wrap
        
>>>>>>> u/styles
            height: 4em
            width: 4em
        
        .dashboard_title
            height: max-content
    
            margin-left: 1em
    
            color: #E0E0E0
            font-family: Cabin
            
        
    .menu
        position: absolute
        top: 0
        right: 0

    
        display: flex
        flex-direction: row
        
        a
            display: flex
    
            justify-content: center
            align-items: center
    
            height: 6em
            width: 6em
    
            padding: 1em
    
            background: #303030
    
            color: #FFF
            font-family: Nunito
    
            transition: background 1s ease-in-out, color 1s ease-in-out
        
            &:hover
                background: #FFF
    
                color:#000

    //Responsive for mobile
    @include media.by-max-width(460px)
        display: flex
        flex-direction: column

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

<<<<<<< HEAD
            a
                height: 3em

    span
        color: palete.$sub-header
</style>
=======
          
            
            a
                display: flex
        
                justify-content: center
                align-items: center
        
                height: 6em
                width: 6em
        
                padding: 1em
        
                background: palete.$header
        
                color: #FFF
        
                transition: background 1s ease-in-out
            
                &:hover
                    background: #FFF
        
                    color:#000

    span
        color: palete.$sub-header
    </style>
>>>>>>> u/styles
