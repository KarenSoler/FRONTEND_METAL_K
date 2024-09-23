export const actions = {
    default: async({request}:{request:Request})=>{
        const formData = await request.formData()
        console.log(formData)
    }
}