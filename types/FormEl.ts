export default interface FormElem{
    name:string,
    value:string | Array<string>,
    type:string,
    metadata?:string,
    data?:Array<{label:string,value:string}>
}