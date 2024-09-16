<script lang='ts'>
    //Imports
    //States
    //Data catching
    
      import AdminHeader from "@components/admin/AdminHeader.svelte";
      import ProductAdmin from "@components/admin/ProductAdmin.svelte";
    
    //Functions
    
    //Rective
    
</script>

<!-- <Modal>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem cum animi nostrum dignissimos alias exercitationem, excepturi nobis quae, delectus dolorum provident. Natus ut illum eum dolore optio magni eos ullam!
</Modal> -->
<h1>Productos</h1>
<div class='product-grid'>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>

    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>

    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
    <ProductAdmin/>
</div>
    
    
<style lang='sass' global>
//Imports 
@use 'src/lib/styles/admin/palete' as palete
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/media' as media
@use 'sass:math'
//Variables
$columns: math.floor(math.div(100vw,5px))

//Styles
main
    position: relative

    display: flex
    flex-direction: column
    align-items: center
    justify-content: start

    width: 100vw
    height: auto
    padding: 1em !important 

    background: palete.$general-bg

    h1
        width: 100%

        text-align: center

    .product-grid
        position: relative

        display: grid
        gap: 0.5em


        @include media.by-max-width(600px)
            grid-template-columns: repeat(2,45vw)
            grid-auto-rows: 45vw
        
        @include media.by-min-width(600px)
            grid-template-columns: repeat(3 ,30vw)
            grid-auto-rows: 30vw
        
        
        
        @include media.by-min-width(740px)
            grid-template-columns: repeat(4 ,22vw)
            grid-auto-rows: 22vw

        
        @include media.by-min-width(900px)
            grid-template-columns: repeat(5 ,18vw)
            grid-auto-rows: 18vw

        
        @include media.by-min-width(1200px)
            grid-template-columns: repeat(6 ,15vw)
            grid-auto-rows: 15vw




</style>