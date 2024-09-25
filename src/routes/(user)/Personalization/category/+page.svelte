<script lang='ts'>
//Imports

  import OptionCard from "@components/user/OptionCard.svelte";
  import OptionList from "@components/user/OptionList.svelte";

//States

//Data catching
let data:OptionSection = {
    title:'Pinturas',
    description: ' Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    id:1,
    options:[
        {
            id:1,
            key:"Electrostatica",
            description:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon:"/src/lib/images/facebook_icon.svg"
        },
        {
            id:2,
            key:"Compresor",
            description:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon:"/src/lib/images/facebook_icon.svg"

        },
        {
            id:3,
            key:"Manual",
            description:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
            icon:"/src/lib/images/facebook_icon.svg"

        }
    ]
}
//Functions

//Rective

</script>

<OptionList section={data}/>

<style lang='sass'>
//Imports

//Variables

//Styles

</style>