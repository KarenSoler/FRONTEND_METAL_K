<script lang='ts'>
  //En este componente Se encuentran las tarjetas colapsables y la información actualizable para los titulos e informacion reactiva de las categorias o grupos d etags en el que se encuentran

    import feature_list from "../../jsons/orderOptions.json"
    import {selectedCategories, availableTags, selectedTags, selectedGroup} from "../../../stores/featureStores"
    import {titlePersonalization, infoPersonalization} from "../../../stores/titleStore"

    import { get } from "svelte/store" //para traer el estado actual de los store

    /*let categories:Array<Category> = feature_list.categories.map((category)=>{
        return category
    })*/

    let categories = feature_list.categories
    let tags = feature_list.tags
    let tagGroups = feature_list.tagGroups

    // Variable para controlar si las categorías se muestran
    let showCategories = true 


    //Función para seleccionar una categoría
    function selectCategory(category: Category){
        selectedCategories.set(category)//Aqui se actualiza el store (selectedCategories) con la categoría seleccionada
        showCategories = false// Oculta las categorías al seleccionar una

        //Titulo y texto reactivo de la seccion del formlario
        titlePersonalization.set("Categorias")
        infoPersonalization.set("Seleccione una de las categorías, así podrémos estar más informados de sus preferencias.")


        //Inicializar los grupos asociados a la categoria desde el primero
        const firstGroupId = 1
        const firstGroup = feature_list.tagGroups.find(group => group.id === firstGroupId)
        
        if(firstGroup){
            //Se convierten los id de los tags en objetos Tags
            const groupWithTags: TagsGroups = {
                ...firstGroup,
                tags: firstGroup.tags.map(tagId => feature_list.tags.find(tag => tag.id === tagId)).filter((tag): tag is Tags => tag !== undefined)
            }

            selectedGroup.set(groupWithTags)//Se actualizó no solo con el id, sino que con el grupo de tags asociados

        } 


       // Verificar si la categoría seleccionada tiene secciones para el primer grupo
       if (category.sections && category.sections[firstGroupId]){
            const relatedTags = category.sections[firstGroupId]
            .map((tagId : number) => feature_list.tags.find(tag => tag.id === tagId))
            .filter((tag): tag is Tags => tag !== undefined)
            
            availableTags.set(relatedTags) //se actualiza selectedTag con los tags pertenecientes a selectedGroup en el momento
        }
    }




    //Función para seleccionar el tag, que se guarde y pasar al siguiente grupo de tags
    function selectTag(tag: Tags){
        selectedTags.update(tags => [...tags, tag])

        //Obtiene el grupo de tags actual desde el store
        let currentGroup = get(selectedGroup)


        //El titulo y texto reactivo de la seccion del formulario se actualizará según la categoría en la que se esté
        if (currentGroup){
          titlePersonalization.set(currentGroup.title)
          infoPersonalization.set(currentGroup.description || "Seleccione una opción en este grupo.")
        }


        //En esete if se incrementan los grupos (iniciado en 1) para mostrar el siguientr
        if (typeof currentGroup === 'object' && currentGroup !== null){
            let nextGroupId = currentGroup.id + 1

            //Filtra los tags del siguiente grupo y actualiza el store
            const selectedCat: Category | null = get(selectedCategories)//Obtiene la categoría seleccionada desde el store selectedCategory
            
            //Condicionar que pide que haya una categoria seleccionada y que esta tenga una section conrrespondiente a currentGrpup
            if(selectedCat && selectedCat.sections[nextGroupId]){
            //nextTags es una constante temporal que contiene los tags filtrados para el siguiente grupo currentGroup
                const nextTagGroup = selectedCat.sections[nextGroupId]
                .map((tagId: number) => feature_list.tags.find(tag => tag.id === tagId))
                .filter((tag): tag is Tags => tag !== undefined)
                availableTags.set(nextTagGroup)


                const nextGroup = tagGroups.find(group => group.id == nextGroupId)

                if (nextGroup) {
                    //se asegura de que nextGroup tenga la propiedad tags como un array de Tags
                    const groupWithTags: TagsGroups ={
                        ...nextGroup,
                        tags: nextGroup.tags.map(tagId => feature_list.tags.find(tag => tag.id === tagId)).filter((tag): tag is Tags => tag !== undefined)
                    }
                    selectedGroup.set(groupWithTags)

                } else {
                    selectedGroup.set(null)
                }
            }else{
                availableTags.set([])
            }
            //si no se hace el if ansterior, me seguiria mostrando el mismo grupo de tags
        }
    }

    function selectTitle(category: Category){
        let title = "Categorias"

        const selectCat = get(selectedCategories)

        if(selectCat){
            title = ""
        }
    }
    
</script>

<main>
<!-- Mostrar las categorías -->
    {#if showCategories}
        <div class="categories">
        {#each categories as category}
            <div class="category-card" on:click={() => selectCategory(category)}>
            <img src={category.icon} alt={category.name}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            </div>
        {/each}
        </div>
    {/if}

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
</main>
    
<style lang='sass'>
@use '../../styles/user/palete' as palete

h3
    color: white

.categories
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 20px

.category-card
  background-color: palete.$u-container
  border: 1px solid palete.$u-border-container
  border-radius: 5px
  padding: 15px
  margin: 10px
  text-align: center
  cursor: pointer
  transition: box-shadow 0.3s

  &:hover
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4)

  p
    color: palete.$u-text



.tags
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin: 20px

  .tags-card
    background-color: palete.$u-container
    border: 1px solid palete.$u-border-container
    border-radius: 5px
    padding: 15px
    margin: 10px
    text-align: center
    cursor: pointer
    shadow: none
    transition: box-shadow 0.3s

    &:hover
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4)

    p
    color: palete.$u-text

    

.selected-tags
  margin: 20px
  padding: 10px
  background-color: palete.$u-container
  border: 1px solid #ddd

  ul
    list-style-type: none
    padding: 0

</style>