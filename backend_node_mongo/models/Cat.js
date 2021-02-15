const mongoose=require("mongoose");

const Cat=mongoose.model(
    "Cat",
    new mongoose.Schema({
        name: String,
        slug:String,
        lampBrands: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Lampy"
            }
        ]
    })
);

module.exports=Cat;