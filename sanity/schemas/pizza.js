export default{
    name: "pizza",
    title: "Pizza",
    type: "document",
    fields:[
        {
            name:"image",
            title: "Image",
            type: "image",
            options:{
                hotspot:true
            }
        },
        {
            name:"name",
            title:"Name",
            type: "string"
        },
        {
            name:"slug",
            title: "Slug",
            type: "slug",
            options:{
                source: "name",
                maxLength: 90
            }
        },
        {
            name:"price",
            title:"Price",
            type: "array",
            of:[{type:"number"}]
        },
        {
            name:"detail",
            title:"Detail",
            type:"string"
        }
        
    ]
}