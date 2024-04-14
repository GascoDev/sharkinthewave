const express=require("express");
const {principal,error404}=require("../controllers/homecontrol");


homeRoutes=express.Router();



homeRoutes.get("/", principal);
homeRoutes.get("/error404",error404);


//En caso de que la ruta especificada sea erronea, se direcciona a la plantilla ejs error404
//desde allí se redirecciona a el index principal.
homeRoutes.get("*", (req, res) => {
    res.redirect("/error404");
   
});




module.exports=homeRoutes;