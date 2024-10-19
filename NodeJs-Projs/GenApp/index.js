const express = require("express");
const app=express()
const port=8881;

// set EJS 

app.set("view engine", "ejs");

app.get("/",(req,res)=>{

    const name= "Juan Perez";
    const age= 30;
    var profession="Ingeniero de Software";

    // Tipos de Datos

    const isStudent=true;
    const favNumbers=[5,10,15];
    const person={
        firstName:"Maria",
        lastName:"Rodriguez",
        age:30
    }

    res.render("index",{

        name,
        age,
        profession,
        isStudent,
        favNumbers,
        person

    });
    
});


// Start Server

app.listen(port,()=>{
    console.log("Servidor Corriendo en http://localhost:"+port);

});


