
var express=require('express')
var path=require('path')
var uploader=require('express-fileupload')
var cloudinary=require('cloudinary').v2
var app=express()
cloudinary.config({
    cloud_name:'cloudenry',
    api_key:'362846431894349',
    api_secret:'k_Ga6Vy9iVV3AK7HTFar420jEqY'
})

app.use(express.json())
app.use(uploader({
    useTempFiles:true
}))
app.post('/',(req,res)=>{
var file=req.files.file
filname=file.name
if(req.files){
    
console.log(file);

}
cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
if(err){
    console.log(err);
}
else{
    console.log(result);
}
})
const extension=path.extname(filname).toLocaleLowerCase()
//console.log(extension);


})
app.listen(6000,()=>{
    console.log("erver si runig at the port: ");
})