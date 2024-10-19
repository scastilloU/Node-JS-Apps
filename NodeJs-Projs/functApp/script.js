function submitName() {
    var name = document.getElementById('nameInput').value;
    fetch('/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('nameInput').disabled = true;
      document.getElementById('nameInput').style.display = 'none';
      document.getElementById('result').innerHTML = `<p>Hello, ${data.name}!</p>`;
    });
  }
  