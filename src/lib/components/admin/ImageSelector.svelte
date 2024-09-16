<script lang='ts'>
//Imports
import plus from '$lib/images/pluss.svg'
//States
let unique:boolean = false
let alt: string = 'image'
let src: string = plus
let accept: string = '.png,.jpg,.svg'

//Functions
function imageTaken(e:Event){
    //@ts-ignore
    if(e.target.files[0]){
        const reader = new FileReader()
        reader.onload = ((e:any)=>{
            src= e.target.result
        })
        //@ts-ignore
        reader.readAsDataURL(e.target.files[0])
    }
}

//Rective

//Props

</script>

<figure>
    <img {src} {alt} class=""/>
    <input type="file" on:change={imageTaken} multiple {accept}/>
</figure>

<style lang='sass'>
//Imports

//Variables

//Styles
figure
    width: 5em
    height: 5em

    img 
        position: absolute
        width: 100%
        height: 100%

    input
        position: absolute
        z-index: 3

        opacity: 0

        width: 100%
        height: 100%
</style>