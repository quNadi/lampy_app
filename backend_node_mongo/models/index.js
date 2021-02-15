const dbconfig=require("../config_db/db.config.js")
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;

const db={};
db.mongoose=mongoose;
db.url=dbconfig.url;
db.lampy=require("./lampy.models.js")(mongoose);
db.cat=require("./Cat")(mongoose);





const createCat=function(cat){
    return db.save(cat).then(docCat=> {
        console.log( "Created Cat", docCat);
        return docCat
    }).catch(err=>{ console.log(err)});
}

const run=async function(){
var catA=await createCat({
    name: "italian",
    slug: "italy"
});
var catB=await createCat({
    name: "bohema",
    slug: "boh"
})
}

run()

module.exports=db;