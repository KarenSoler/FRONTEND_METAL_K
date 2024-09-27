<script lang='ts'>
//Imports
    import { writable, type Writable } from 'svelte/store';
    import type { ErrorInput, RegexValidation } from '../types/Form';
    import type { text } from 'stream/consumers';

// States
    let label:string|undefined = undefined
    let name:string
    let placeholder:string|undefined = undefined
    let id:string|undefined = undefined
    let defaultValue:string|number = ""
    let value = writable(defaultValue)

    //modes
    let disabled:boolean = false
    let type:'textarea'|'password'|'date'|'text'|'number' = 'text'

    //External error seting
    let externalError:Writable<boolean>|undefined = undefined
    let valueGetter:((value:string|number)=>void)|undefined = undefined

    //Validations 
    let touched:boolean
    let error:ErrorInput|undefined
    let regex:RegexValidation|undefined = undefined
    let required:boolean|string|undefined = undefined
    let logic:((value:string)=>string|undefined)|undefined = undefined

    //External style setting
    let externalClass:string|undefined = undefined
    
//Functions
    function update(event:Event){
        let input=event.target
        //@ts-ignore
        value.set(input.value)
    }

    //Catching first click
    

        function firstClickHandler(){
            touched=(!touched)?(true):(true)
        }

    //Validations centralizer
    function validater(value:string|number){
        if(typeof value == 'number'){
            value = value.toString()
        }
        while(true){
            if(!requiredValidation(value)) break
            if(!regexValidation(value)) break 
            if(!logicValidation(value)) break
            break
        }
    }
    
    //Validations
    function regexValidation(value:string){
        if(regex){
            let result:boolean|undefined
            if(typeof regex?.pattern == 'string'){
                let rx = new RegExp(regex?.pattern)
                result = rx.test(value)
            }
            else{
                result = regex?.pattern.test(value)
            }
            if(result){
                error =undefined
            }
            else{
                error= {
                    message:regex?.message,
                    type:'regex'
                }
            }
            return result
        }
        return true
    }

    function requiredValidation(value:string){
        if(value=="" || !value){
            if(typeof required =='string'){
                error= {
                    message:required,
                    type:'required'
                }
            }
            else{
                error={
                    type:'required'
                }
            }
            return false
        }
        else{
            error=undefined 
            return true
        }
    }

    function logicValidation(value:string){
        if(logic){ 
            let result = logic(value)
            if(!result){
                error = undefined
                return true
            }
            else{
                error = {
                    message:result,
                    type:'logic'
                }
                return false
            }
        }
        return true
    }
//Reactive
    externalError?.subscribe((value)=>{
        if(!value && error){
            externalError.set(true)
        }
    })


    value.subscribe((value)=>{
        if(typeof valueGetter == 'function'){
            valueGetter(value)
        }
    })

    //Setting id
    $: value.set(defaultValue)
    
    $:  if(!id) id = name

    $: if(touched) validater($value)

    $: {
        if(externalError){
            if(error){
                externalError.set(true)
            }
            else{
                externalError.set(false)
            }
        }
    }
                

//Props
    export{
        label,
        placeholder,
        name,
        disabled,
        type,
        defaultValue as default,
        regex,
        required,
        logic,
        externalClass as class,
        externalError as error,
        valueGetter as value
    }
</script>
<!-- ? Simple text input -->
    <div class={externalClass} class:input={true} class:error={error} class:textarea={type=='textarea'}>

        {#if label}
                <label class="label" for={id}>
                    {label}
                    {#if (required)}
                        <span>*</span>
                    {/if}
                </label>
        {/if}
        
        {#if (required && !label)}
            <span>"*"</span>
        {/if}
        {#if (disabled && $value)}
            <input type="hidden" value={$value} {name}/>
        {/if}
        {#if type=='textarea'}
            <textarea
                {placeholder} 
                class:input={true} 
                {id} 
                {name}
                {disabled}
                value = {$value}
                on:input={update}
                on:blur={firstClickHandler}
            ></textarea>
        {:else}
            <input 
                {type}
                {placeholder} 
                class:input={true} 
                {id} 
                {name}
                {disabled}
                value = {$value}
                on:input={update}
                on:blur={firstClickHandler}
            />
        {/if}
        {#if error?.message}
            <span>
                {error.message}
            </span>
        {/if}
    </div>

<style lang='sass'>
//Imports and Uses
@use 'src/lib/styles/palete.sass' as palete
@use 'src/lib/styles/admin/elements' as elements

.error
    color: red
    font: 1em Nunito

    span
        color: red

.input
    display: flex
    flex-direction: column
    gap: 1em

    width: 100%


    label
        display: flex

        height: 1em

        color: palete.$tittle
        font: 1em Nunito

    input,textarea
        @include elements.text-input
            padding: 10px
            
    /* Para Chrome, Safari, Edge y Opera */
    input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button 
        -webkit-appearance: none
        margin: 0
    
    input[type=number] 
        -moz-appearance: textfield
    

    textarea
        display: flex
        flex: auto
        justify-content: start
        

</style>