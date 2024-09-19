<script lang='ts'>
//Imports
    import { writable, type Writable } from 'svelte/store';
    import type { ErrorInput, RegexValidation } from '../types/Form';
    import type { error } from 'console';

// States
    let label:string|undefined = undefined
    let name:string
    let placeholder:string|undefined = undefined
    let id:string|undefined = undefined
    let defaultValue:string = ""
    let value = writable(defaultValue)
    let disabled:boolean|(()=>boolean) = true

    //External error seting
    let externalError:Writable<boolean>|undefined = undefined

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
    function validater(value:string){
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
        console.log(value)
        if(!value && error){
            externalError.set(true)
        }
    })
    //Setting id
    $:if(!id) id = name

    $: if(touched) validater($value)

    $: {
        console.log(error)
        if(externalError){
            if(error){
                console.log(':v')
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
        defaultValue as value,
        regex,
        required,
        logic,
        externalClass as class,
        externalError as error
    }
</script>
<!-- ? Simple text input -->
    <div class={externalClass} class:input={true} class:error={error}>
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
        <input 
            type="text" 
            {placeholder} 
            class:input={true} 
            {id} 
            {name}
            value = {$value}
            on:input={update}
            on:blur={firstClickHandler}
        />
        {#if error?.message}
            <span>
                {error.message}
            </span>
        {/if}
    </div>

<style lang='sass'>
    @use 'src/lib/styles/palete.sass' as palete
    .error
        color: red
        font: 1em Nunito

        span
            color: red

    .input
        
        width: 100%

        label
            color: palete.$tittle
            font: 1em Nunito

        input

            margin-bottom: 5px
            margin-top: 15px

            padding: 10px

            background: palete.$input
            
            border: 1px solid palete.$input-border
            border-radius: 4px

            font: 1em Nunito
            
            transition: border-color 0.3s ease-in-out

            &:hover
                border-color: palete.$input-border-hover
                background: palete.$input-hover
                outline: none

                transition: 1.5s

            &:active
                border-color: palete.$input-border-hover
                background: palete.$input-hover
                outline: none

                transition: 1.5s

            &::placeholder
                color: palete.$placeholder
</style>