const express= require("express");
const app=express();
const port=9090;

//config del EJS y engine
app.set("view engine","ejs");
app.set("vieww",__dirname+"/views");

// middleware parsin URL
app.use(express.urlencoded({extended:true}));

//routeado del app

app.get("/",(req,res)=>{

    res.render("index");

});

app.post("/purchase", (req,res)=>{
    const { age } = req.body;

    //si es mayor que 18

    if(age<18){
        res.render("error", {message:"Lo siento debes ser mayor de edad para comprar"});
    }else{
        res.render("Exito", {message: "Transaccion exitosa!"});
    }
});

// start the server

app.listen(port,()=>{
    console.log("Server running on port http://localhost:"+port);
});