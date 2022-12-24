export default interface FormElem{
    name:string,
    value:string | string[],
    type:string,
    metadata?:string,
    data?:Array<{label:string,value:string}>
}