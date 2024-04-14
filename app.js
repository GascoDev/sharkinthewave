const express=require("express");
const app=express();
//Require de las rutas
const homeRoutes=require("./routes/homerout");



require("dotenv").config();

//declaro constante y requiero path para manejar motor de ejs
const path=require("path");

//seteo motor de ejs
//configurations
app.set("views", path.join(__dirname,"views"));
app.set("view engine",".ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use("/",homeRoutes);
app.use("/error404",homeRoutes)


console.log("ready");

app.listen(process.env.PORT,()=>{
    console.log("svr listen and ready in the port: " + process.env.PORT);
}) 