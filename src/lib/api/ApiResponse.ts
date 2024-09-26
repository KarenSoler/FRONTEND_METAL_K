class ApiResponse<R>{
    status:ApiStatus
    message: string|undefined
    result:( R extends null?{[key: string]: any}:R)|undefined

    constructor(){

    }

    getData(response:ApiResponseData<R>) {
        this.status = response.status
        this.message = response.message
        this.result = response.result
    }


    isOk=(fu:()=>any,errorFu?:(()=>any))=>{
        if(this.status=='ok') fu()
        else 
            if(errorFu)
                errorFu()
    }

    isError=(fu:()=>any)=>{
        if(this.status=='error') fu()
    }

    [Symbol.iterator](){
        
    }
}

export default ApiResponse