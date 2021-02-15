const mongoose=require("mongoose");

const Lampy=mongoose.model(
    "Lampy",
    new mongoose.Schema({
        title: String,
        description: String,
        category: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Cat"
            }
        ],
       phone : Number,
       contact_person: String, 
    })
);

module.exports="Lampy"