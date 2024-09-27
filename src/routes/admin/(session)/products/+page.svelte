<script lang='ts'>
//Imports
    //Components
    import ProductAdmin from "@components/admin/ProductAdmin.svelte";
//States
    let products:Array<Product> = []
    //Data catching
    export let data
//Functions

//Rective
    $: if(data.products) products = data.products
</script>

<!-- <Modal>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem cum animi nostrum dignissimos alias exercitationem, excepturi nobis quae, delectus dolorum provident. Natus ut illum eum dolore optio magni eos ullam!
</Modal> -->
<h1 class="product-title">Productos</h1>
<div class='product-grid'>
    {#each products as product}
        <ProductAdmin {product}/>
    {/each}
</div>
<a class="add-product" href="./products/new">

</a>
    
    
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

    background: palete.$general-bg

.add-product
    @include elements.generic-button()
        position: fixed
        bottom: 2em
        right: 2em

        width: 5em
        height: 5em

        background: url('/src/lib/images/pluss.svg')
        background-position: 50% 50%
        background-size: 100%

        border-radius: 100%


.product-title
    width: 100%
    height: 2em
    
    padding: 0.5em

    text-align: center

.product-grid
    position: relative

    display: grid
    justify-content: center
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

    
    // @include media.by-min-width(1200px)
    //     grid-template-columns: repeat(6 ,15vw)
    //     grid-auto-rows: 15vw




</style>