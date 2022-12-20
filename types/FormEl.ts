export default interface FormElem{
    name:String,
    value:String,
    type:String,
    data?:Array<{label:String,value:String}>
}