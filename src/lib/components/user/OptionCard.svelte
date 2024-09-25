<script lang='ts'>
//Imports

//States
    let option:Option

//Functions
    function select(){
        
    }

//Rective

//Props
export{
    option
}
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<button 
    class="option-card" 
    on:click={select} 
    class:with-icon={option.icon}
>
    <svelte:element this={option.icon&&'img'} class='option-img' src={option.icon}/>
    <h3>{option.key}</h3>
    <p>{option.description}</p>
</button>
    

<style lang='sass'>
//Imports
@use '../../styles/user/palete' as palete
@use 'src/lib/styles/admin/elements' as elements

//Variables

//Styles
.option-card
    position: relative

    display: flex
    flex-direction: column
    justify-content: center

    padding: 15px 5%

    background-color: palete.$u-card-container
    border: 1px solid palete.$u-border-container
    shadow: none

    border-radius: 5px

    text-align: center

    cursor: pointer

    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out,transform 0.5s ease-in-out
    
    &:hover
        background-color: palete.$u-card-hover
        box-shadow: palete.$u-card-shadow 0 0 10px 0

    &:active
        transform: scale(0.98)  
    
    .option-img
        @include elements.icon-theming()

        position: absolute
        top: 50%
        left: 1em
        transform: translate(0,-50%)

        width: auto
        height: 100%
        max-height: 5em

    h3
        text-align: left
        color: palete.$u-title
    p
        color: palete.$u-text
        text-align: left

.with-icon
    padding-left: 7em

</style>