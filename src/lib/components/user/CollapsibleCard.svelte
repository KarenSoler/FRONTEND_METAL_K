<script lang='ts'>
    import feature_list from "../../jsons/orderOptions.json"
    import {selectedCategories, availableTags, selectedTags, selectedGroup} from "../../../stores/featureStores"
    import { get } from "svelte/store" //para traer el estado actual de los store

    /*let categories:Array<Category> = feature_list.categories.map((category)=>{
        return category
    })*/

    let categories = feature_list.categories
    let tags = feature_list.tags
    let tagGroups = feature_list.tagGroups

    //Función para seleccionar una categoría
    function selectCategory(category: Category){
        selectedCategories.set(category)//Aqui se actualiza el store (selectedCategories) con la categoría seleccionada
    
        //Inicializar los grupos asociados a la categoria desde el primero
        const firstGroupId: TagsGroups | null = 1
        selectedGroup.set(firstGroupId)

        //se actualiza selectedTag con los tags pertenecientes a selectedGroup en el momento
        const relatedTags = category.sections[firstGroupId].map(tagId => {
            return feature_list.tags.find(tag => tag.id === tagId)
        })
        availableTags.set(relatedTags)
    }

    //Función para seleccionar el tag, que se guarde y pasar al siguiente grupo de tags
    function selectTag(tag: Tags){
        selectedTags.update(tags => [...tags, tag])

        //Obtiene el grupo de tags actual desde el store
        let currentGroup = get(selectedGroup) ?? 0
        //Se incrementan los grupos (iniciado en 1) para mostrar el siguientr
        currentGroup += 1
        selectedGroup.set(currentGroup)

        //Filtra los tags del siguiente grupo y actualiza el store
        const selectedCat: Category | null = get(selectedCategories)//Obtiene la categoría seleccionada desde el store selectedCategory
        //Condicionar que pide que haya una categoria seleccionada y que esta tenga una section conrrespondiente a currentGrpup
        if(selectedCat && selectedCat.sections[currentGroup]){
           //nextTags es una constante temporal que contiene los tags filtrados para el siguiente grupo currentGroup
            const nextTagGroup = selectedCat.sections[currentGroup].map(tagId => {
                return feature_list.tags.find(tag => tag.id == tagId)
            })
            availableTags.set(nextTagGroup)
        }else{
            availableTags.set([])
        }
        //si no se hace el if ansterior, me seguiria mostrando el mismo grupo de tags
    }
    
</script>

<!-- Mostrar las categorías -->
<!-- {#if categories.length != 0} -->
    <div class="categories">
        {#each categories as category}
            <div class="category-card" on:click={()=> selectCategory(category)}>
                <img src={category.icon} alt={category.name}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
            </div>
        {/each}
    </div>
<!-- {/if} -->

<!-- Mostrar los tags disponibles -->
{#if $availableTags.length != 0}
    <div class="tags">
        {#each $availableTags as tag}
            <div class="tags-card" on:click={() => selectTag(tag)}>
                <h3>{tag.title}</h3>
                <p>{tag.description}</p>
            </div>
        {/each}
    </div>
{/if}


<!-- Mostrar los tags seleccionados -->
{#if $selectedTags.length != 0}
    <div class="selected-tags">
        <h3>Tags seleccionados:</h3>
        <ul>
            {#each $selectedTags as tag}
                <li>{tag.title}</li>
            {/each}
        </ul>
    </div>
{/if}

    
    <style lang='sass'>
    //Imports
    
    //Variables
    
    //Styles
    
    </style>