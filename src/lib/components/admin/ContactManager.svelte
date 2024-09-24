<script lang='ts'>
    //Imports
    import { updated } from '$app/stores';
    import delete_icon from '$lib/images/delete-icon.svg'
    import add_icon from '$lib/images/plus_u.svg'
    import contact_types from '$lib/jsons/contact_types.json'
    import Button from '@components/admin/Button.svelte'
    import Field from '@components/Field.svelte'
    import Modal from '@components/Modal.svelte'
    import { afterUpdate, onMount } from 'svelte';
    import { get, writable } from 'svelte/store';
    //States
    let contacts = writable<Array<Contact>>([])
    let types:Array<{[key:string]:any}> = []
    let type:string = "none"

    let current = writable<Contact>({
        type_id:"none"
    })

    let defaultValue:Array<Contact>=[]

    let reset:boolean = false

    let error:boolean = false

    //External style setting
    let externalClass:string|undefined = undefined
    //Functions
    function addContact(){
        if($current.value == "" || $current.value == undefined || $current.type_id == "none" || $current.type == undefined){
            error = true
        }
        else{
            contacts.update((value)=>{
                value.push($current)
                reset = true
                return value
            })
            current.set({
                type_id:undefined,
                value:undefined,
                type: undefined,
                icon: undefined
            })
        }
    }

    function catchNewContact(e:Event,atr:'type'|'value'|'icon'|'type_id'){
        //@ts-ignore
        let input=e.target.value
        reset = false
        current.update((value)=>{
            if(atr == 'type_id'){
                if(types[parseInt(input)]){
                    value.type_id=input
                    value.type=types[input].name
                    value.icon=types[input].icon
                }
            }
            if(atr == 'value'){
                value.value=input
            }
            return value
        })
    }

    //Rective
    $:{if(defaultValue)contacts.set(defaultValue)}


    $:{
        types = (contact_types.map((type)=>{
            return type
        }))
    }

    //Props
    export{
        externalClass as class,
        defaultValue as default
    }
</script>

<div class={externalClass} class:contacts-container={true}>
    <input class="json-contact" name="contacts" type="hidden" value={JSON.stringify($contacts)}/>
    <label for={'contacts'}>Contactos</label>
    <div class="contact-enter">
        <!-- <Field name='' class="contact-input" placeholder="Numero, usuario o identificador" value={(input:string)=>{catchNewContact(input,'value')}} bind:this={contactInput}/> -->
        <input class="contact-input" value={reset?"":$current.value} placeholder="Numero, usuario o identificador" on:change={(e)=>{catchNewContact(e,'value')}}/>
        <select class="contact-type" class:default={$current.type_id=='none'} on:change={(e)=>{catchNewContact(e,'type_id')}}>
            <option value="none">Seleccionar tipo</option>
            {#each types as type,i}
                <option value={i}>{type.name}</option>
            {/each}
        </select>
        <Button src={add_icon} class='add-contact' event={addContact} theming/>
    </div>
    <div class="contacts-list">
        {#if $contacts}
            {#each $contacts as contact,i}
                <div class="contact-registed">
                    <picture class="contact-icon">
                        <img src={types[contact.type_id].icon} alt={`${types[contact.type_id].name}-icon`}/>
                    </picture>
                    <span class="contact-value">
                        {contact.value}
                    </span>
                    <span class="contact-type">
                        {types[contact.type_id].name}
                    </span>
                    <Button src={delete_icon} class='delete-contact' event={()=>{}}/>
                </div>
            {/each}
        {/if}
    </div>
</div>
<Modal trigger={error}>
    Tienes que definir todos los campos del contacto
</Modal>

<style lang='sass' global>
//Imports
@use 'src/lib/styles/admin/palete' as palete
@use 'src/lib/styles/admin/elements' as elements
//Variables

//Styles
.contacts-container
    display: flex
    flex-direction: column
    gap: 1em

    width: 100%
    height: 100%

    .contact-enter
        display: flex
        flex-wrap: nowrap
        gap: 1em

        input, select
            height: 2em

            @include elements.text-input()

        .contact-input
            display: flex
            flex: auto

            width: unset

        select
            display: flex
            flex: 6em

        .default
            color: palete.$input-placeholder

        .add-contact
            display: flex
            flex:auto
            
            width: 2em   
            height: 2em

    .contacts-list
        display: flex
        justify-content: flex-end
        flex-direction: column-reverse
        flex: 4em
        gap:1em

        height: max-content
        width: 100%

        overflow-y: scroll
    
    .contact-registed
        display: flex
        align-items: center
        gap:1em

        height: auto
        width: 100%

        padding: 0.5em

        background: palete.$hight-bg

        border-radius: 0.5em

        color: palete.$text

        .contact-icon
            height: 2em
            width: 2em

            @include elements.icon()

        .contact-value
            display: flex 
            flex: 6em


        .contact-type
            display: flex 
            flex: 1px

            padding: 0 1em

            border-color: palete.$contrast
            border-width: 0 0 0 1px
            border-style: solid

        .delete-contact
            align-self: flex-end
            width: 2em
            height: 2em

            background: palete.$delete-option
            
</style>