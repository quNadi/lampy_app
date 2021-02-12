const db=require("../models");
const LampProducent=db.lampy;

exports.create=(req,res)=> {
    if (!req.body.name) {
        res.status(400).send({ message: "Content can't be empty"});
        return;
    }

const lampy=new LampProducent({
    name: req.body.name,
    description: req.body.description,
    category:req.body.category,
    contact_person: req.body.contact_person,
    phone: req.body.phone,
    price_category: req.body.price_category,
    website: req.body.website,
    extras:req.body.extras,
    change_order: req.body.change_order,
    trade_terms: req.body.trade_terms
    });

    lampy.save(lampy).then(data => {
        res.send(data);
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error ocurred"
        });
    });

};

exports.findAll=(req,res)=> {
    const name=req.query.name;
    var condition=name ? { name: { $regex: new RegExp(name), $options: "i"}}:{};

LampProducent.find(condition).then(data=> { res.send(data)}).catch(err=> {res.status(500).send({ message: err.message || "Error during retriving "});
});};

exports.findOne=(req,res)=> {
    const id=req.params.id;
    LampProducent.findById(id).then(data => { if(!data) res.status(404).send({message: "Not found" + id   }); else res.send(data); }).catch(err=> { res.status(500)
    send({message: " Error retrive one"+ id });
});
};

exports.update=(req,res)=> {
    if (!req.body){
        return res.status(400).send({ message: "data cant be empty"});
}
const id=req.params.id;
LampProducent.findByIdAndUpdate(id,req.body, { useFindAndModify: false}).then(data=> {
    if (!data){
        res.status(404).send({
            message: ` Cannot update with  id ${id}`
        });
     } else res.send({ message: "Updated"});
}).catch(err=> { res.status(500).send({ message:"Error updating with "+id});
});
};

exports.delete=(req,res)=>{
    const id=req.params.id;
    LampProducent.findByIdAndRemove(id).then(data=> {
        if(!data){
            res.status(404).send({
                message: `Cannot delete with id ${id}`
            });
        } else {
            res.send({ message:"Succes deleted"});
        }
    }).catch(err=> res.status(500).send({ message: "Could not delete with id" + id}))
}

exports.deleteAll=(req,res)=>{
    LampProducent.deleteMany({}).then(data=> {
        res.send({
            message: `${data.deletedCount} data were deleted`
        });
    }).catch(err=> { res.status(500).send({ message: err.message || "Some error occured"});
});
};