const principal=(req,res)=>{
    res.render("./pages/index");
};

const error404=(req,res)=>{
    res.render("./pages/error404");
}

module.exports={principal, error404};