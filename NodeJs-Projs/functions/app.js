const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');



// Function declaration
function ComprarAlcohol() {
  // Local variable
  var item = prompt("Desea Comprar Alcohol?");

  if(item=="si"){
    var age = prompt("Cuantos Años tiene?");
    if(age>18){
      var response="Gracias por comprar nuestras bebidas. Cual bebida Desea?"
      return response;
    }else{
      var response="Debido a que es menor de edad no puede adquirir este producto. Alguna otra cosa?"
      return response;
    }
  }

  console.log(response); // Output: This is a local variable.
  return response;
}

// Global variable
var globalVariable = "This is a global variable.";

// Route to display the execution results in the EJS file
app.get('/', (req, res) => {
  const result = ComprarAlcohol();
  res.render('index', { response });
});

app.listen(3355, () => {
  console.log('Server is running on port 3000');
});
