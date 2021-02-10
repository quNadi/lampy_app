const dbconfig=require("../config_db/db.config.js")
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;

const db={};
db.mongoose=mongoose;
db.url=dbconfig.url;
db.lampy=require("./lampy.models.js")(mongoose);

module.exports=db;