export default interface FormElem{
    name:String,
    value:String | Array<String>,
    type:String,
    metadata?:String,
    data?:Array<{label:String,value:String}>
}