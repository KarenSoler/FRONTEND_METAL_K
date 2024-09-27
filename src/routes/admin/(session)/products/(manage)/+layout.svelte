<script lang='ts'>
//Imports
    //Storages
    import { page } from "$app/stores";

    //Components
    import Field from "@components/Field.svelte";
    import ImageSelector from "@components/admin/ImageSelector.svelte";
  import Submit from "@components/admin/Submit.svelte";

//States
    let title:string
    let date:string
    let categories:Category[] = [{
        name:'aaaaa',
        id:1
    }]
    let action:string
//Data catching

//Functions

//Rective
    page.subscribe((page)=>{
        if(page.route.id){
            if(page.route.id.includes('new')){
                title = "Agregar producto"
                action = "?/new_product"
            }
            if(page.route.id.includes('edit')){
                title = "Editar producto"
                action = "?/edit_product"
            }
        }
    })
</script>

<form class="product-form" method="post" {action}>
    <h1>{title}</h1>
    <Field name="time" label="Tiempo de produccion" type="number" placeholder="Tiempo en dias"/>
    <Field name="price" label = "Precio total" type="number" placeholder="COP"/>
    <Field type='date' name="date" label = "Fecha de finalizacion"/>
    <div class="category-selector">
        <label for="category">Categoria</label>
        <select name="category">
            <option value='none'>Seleccione categoria</option>
            {#each categories as category}
                <option value={category.id}>{category.name}</option>
            {/each}
        </select>

    </div>
    <ImageSelector name="pictures" class="pictures-selector"/>
    <Submit>
        Registrar
    </Submit>
</form>
<slot/>

<style lang='sass' global>
//Imports
@use 'src/lib/styles/admin/elements' as elements
@use 'src/lib/styles/palete.sass' as palete
//Variables

//Styles
.product-form
    @include elements.section()
    @include elements.center-form()

    display: flex
    align-items: center
    flex-direction: column
    gap:1em
    
    width: 50%
    min-width: 300px
    max-width: 600px
    height: auto

    padding: 2em
    
    .category-selector
        display: flex
        flex-direction: column
        gap: 1em

        width: 100%
            
        label
            display: flex

            height: 1em

            color: palete.$tittle
            font: 1em Nunito

        select
            @include elements.text-input()
            width: 100%

            padding: 0.5em
</style>