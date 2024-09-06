<script lang='ts'>
    import { writable } from 'svelte/store';

//Imports
    import type { ErrorInput, RegexValidation } from '../types/Form';
// States
    let label:string|undefined = undefined
    let name:string
    let placeholder:string|undefined = undefined
    let id:string|undefined = undefined
    let defaultValue:string = ""
    let value = writable(defaultValue)
    let disabled:boolean|(()=>boolean) = true

    //Validations 
    let touched:boolean
    let error:ErrorInput|undefined
    let regex:RegexValidation|undefined = undefined
    let required:boolean|string|undefined = undefined
    let logic:((value:string)=>string|undefined)|undefined = undefined

    //External style setting
    let external:string|undefined = undefined
//Functions
    function update(event:Event){
        let input=event.target
        //@ts-ignore
        value.set(input.value)
    }
    //Validations centralizer
    function validater(value:string){
        console.log(value)
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
        return true
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
    //Setting id
    $:if(!id) id = name

    $: validater($value)

//Props
    export{
        label,
        placeholder,
        name,
        disabled,
        defaultValue as value,
        regex,
        required,
        logic,
        external as class
    }
</script>
<!-- ? Simple text input -->
    <div class={external} class:input={true} class:error={error}>
        {#if label}
                <label class="label" for={id}>
                    {label}
                    {required && "*"}
                </label>
        {/if}
        
        {(required && !label)?"*":""}
        <input 
            type="text" 
            {placeholder} 
            class:input={true} 
            {id} 
            {name}
            value = {$value}
            on:input={update}
        />
        {#if error?.message}
            <span>
                {error.message}
            </span>
        {/if}
    </div>

<style lang='sass'>
.error
    color: red
    font: 1em Nunito

.label
    color: black
    font: 1em Nunito

.input
    width: 100%
    padding: 10px
    margin-bottom: 15px
    border: 1px solid #ccc
    border-radius: 4px
    transition: border-color 0.3s
    font: 1em Nunito

    .input:hover
        border-color: #007BFF
        outline: none



</style>