<script lang='ts'>

    import category_list from "../../../routes/test/categoryUser.json"
    
    let categories:Array<CategoryModule> = category_list.categories.map((category)=>{
        return category
    })
    
</script>


{#if categories.length != 0}
    <div class="categories-container">
        {#each categories as category}
            <div class="category-section">
                <a href={category.name}>
                    <span>
                        {category.name}
                    </span>
                </a>
            </div>
        {/each}
    </div>
{/if}


<style lang='sass'>
    //Imports
    
    //Variables
    
    //Styles
    
</style>