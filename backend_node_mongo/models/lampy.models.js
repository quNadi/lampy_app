const { Mongoose } = require("mongoose");

module.exports=mongoose =>{
    var schema=mongoose.Schema(
            {name: String,
            description: String,
            category: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Cat"
                }
            ],
    contact_person: String,
phone: Number,
price_category: String,
website: String,
extras:String,
change_order:String,
trade_terms:String},
{ timestamps:true}
        );
schema.method("toJSON",function(){
    const {__v,_id, ...object} =this.toObject();
    object.id=_id;
    return object;
});
const LampySchema=mongoose.model("lampy",schema);
    return LampySchema;
};