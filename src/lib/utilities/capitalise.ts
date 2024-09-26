
export default function capitalize(text:string){
    let capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalized
}