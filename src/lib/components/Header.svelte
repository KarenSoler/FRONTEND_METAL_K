<script lang='ts'>
    import {page} from '$app/stores'
    import logo from '$lib/images/metalK_logo.svg'
    import header_config from '$lib/jsons/header.json'
    
    </script>
    
    <header>
        <div class='metalK_logo'>
            <picture>
                <img src={logo} alt='logo'/>
            </picture>
            <div class='dashboard_title'>
                <h1>METAL K</h1>
                <span>Admin dashboard</span>
            </div>
        </div>
        <div class='header_menu'>
            {#if header_config.modules.length != 0}
                {#each header_config.modules as module}
                    <a href={module.route}>
                        <span>
                            {module.name}
                        </span>
                    </a>
                {/each}
            {/if}
        </div>
    </header>
    
    <style lang='sass'>
    @import 'src/app.sass'
    
    header
        position: relative
    
        min-height: 6em
    
        background: #303030
    
        .metalK_logo
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
        
                color: #E0E0E0
                font-family: Cabin
                
            
        .header_menu
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
        
                transition: background 1s ease-in-out
            
                &:hover
                    background: #FFF
        
                    color:#000
    </style>