const express=require("express");
const principal=require("../controllers/homecontrol");

homeRoutes=express.Router();


homeRoutes.get("/", principal);


module.exports=homeRoutes;