async function makeRequest(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  function sumar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    makeRequest('/sumar', { num1, num2 })
      .then(data => {
        document.getElementById('resultado').innerText = `Resultado: ${data.resultado}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Repite el proceso para las otras operaciones (restar, multiplicar, dividir)
  //...
  
  