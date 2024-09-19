class ApiResponse{
    status:'ok'|'error'|undefined
    message: string|undefined
    result: { [key: string]: any }={}

    constructor(){
    }

    getData(response:ApiResponseData) {
        this.status = response.status
        this.message = response.message
        for(let i in response){
            if(i!='status'&&i!='message'){
                if(i!=undefined){
                    this.result[i]=response.i
                }
            }
        }
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