module.exports=app=> {
    const lampy=require("../controllers/lampy.controller.js");

    var router=require("express").Router();

    router.post("/", lampy.create);

    router.get("/",lampy.findAll);

    router.get("/:id",lampy.findOne);

    router.put("/:id",lampy.update);

    router.delete("/:id", lampy.delete);

    router.delete("/", lampy.deleteAll);

    app.use('/lampy',router)
};