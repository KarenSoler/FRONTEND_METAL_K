<script lang='ts'>
	import logo from '$lib/images/metalK_logo.svg'
    import HeaderUser from '@components/user/HeaderUser.svelte';
    import bg from '$lib/images/user-bg.svg'
    import ProductAdmin from "@components/user/ProductUser.svelte";

    export let info = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, "
    export let imgEnterprice = logo

</script>


<header>
    <HeaderUser/>
</header>

<main class="home-page">
    <div class="background" style="background-image: url({bg});">

        <div class="info-container">
            
            <picture class="image-wrapper">
                <img src={imgEnterprice} alt="Imagen de la empresa">
                <!-- Degradado -->
                <div class="gradient-overlay"></div>
            </picture>

            <div class="text-wrapper">
            <p>{info}</p>
            </div>

        </div>

        <div class="filter-option">
            <button type="button" class="category-option"><h2>Todos los productos ⯯</h2></button>
        </div>
        <div class="product-container">
            <!-- <figure class="product-image">  -->
                <ProductAdmin/>
          <!-- </figure>  -->
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

.info-container
    display: flex
    width: 100vw
    min-height: 40vh
    max-height: 50vh
    position: relative
    overflow: hidden
    //margin: 60px auto -85px auto 
    box-shadow: rgba(10, 10, 10, 0.9) 0px 15px 20px 0px  


    .image-wrapper
        display: inline-block
        position: relative
        width: 100% // LA Imagen ocupa la mitad izquierda
        height: inherit

        img
            width: 100%
            height: 100%
            object-fit: cover 
            position: relative
            z-index: 1

    .gradient-overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: linear-gradient(to right, transparent, palete.$u-form-icon)
        z-index: 2 

    .text-wrapper
        width: 100% 
        height: inherit
        display: flex
        justify-content: flex-start
        padding: 30px 20px
        background: palete.$u-form-icon
        z-index: 1
        overflow: auto //evita que el texto se corte si es muy largo

        p
            font-size: 1em
            color: palete.$u-text
            text-align: justify
            word-wrap: break-word // Para evitar que las palabras largas se salgan del div
            align-items: center
            justify-content: center
            line-height: 1.5
            padding-right: 25px
        

.filter-option
    position: relative
    background: palete.$u-filter-option
    padding: 45px 1px
    box-shadow: rgba(10, 10, 10, 0.5) 0px 15px 20px 0px  
    z-index:10

    .category-option
        background: none
        border: none
        display: block
        margin: 0 auto

        &:hover
            cursor: pointer
        
        h2
            color: palete.$u-header
            text-align: center
            

.product-container
    background: palete.$u-products-bg
    display: grid
    grid-template-columns: repeat(4, 10em)
    grid-gap: 20px
    width: 85vw
    margin: 0 auto //para que este centrado
    box-sizing: border-box
    justify-content: center
    align-items: center
    padding: 60px 60px 60px 10vw
    z-index:1

   

    
  
</style>