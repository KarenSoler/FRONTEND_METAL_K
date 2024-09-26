<script lang='ts'>
//Imports
  import OptionList from "@components/user/OptionList.svelte";


//States
  let section:OptionSection

//Data catching
  export let data

//Functions

//Rective
$:{section=data.section}

</script>

<OptionList {section} name={'category'}/>

<style lang='sass'>
//Imports

//Variables

//Styles

</style>