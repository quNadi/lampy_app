const dbconfig=require("../config_db/db.config.js")
const mongoose=require("mongoose");

const Cat=require("./Cat");

const conn=mongoose.createConnection(dbconfig.url,{ useNewUrlParser:true, useUnifiedTopology:true});

const Catt=conn.model('Category', Cat);



const createCat=function(cat){
    return Catt.create(cat).then(docCat=> {
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

