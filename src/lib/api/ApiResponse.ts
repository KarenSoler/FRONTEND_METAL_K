class ApiResponse{
    status:ApiStatus
    message: string|undefined
    result: { [key: string]: any } ={}

    constructor(){

    }

    getData(response:ApiResponseData) {
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