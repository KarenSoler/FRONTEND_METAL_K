export interface RegexValidation{
    pattern:string|RegExp
    message:string
}
export interface ErrorInput{
    type:'regex'|'required'|'logic'
    message?:string
}