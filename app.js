const express=require("express");
const app=express();
const homeRoutes=require("./routes/homerout");
//Require de las rutas

//declaro constante y requiero path para manejar motor de ejs
const path=require("path");

//seteo motor de ejs
//configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine",".ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use("/",homeRoutes);

console.log("ready");

app.listen("7000",()=>{
    console.log("svr listen and ready in the port 7000");
})