



const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// Connection URL
const url = 'mongodb+srv://welcome1:Welcome1234@clusternode.acf1wnl.mongodb.net/';


const port = 9999;


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    const db = client.db(dbName);

    // Retrieve the document from the "myCollection" collection
    const collection = db.collection('myCollection');

    collection.findOne({}, function(err, document) {
      if (err) {
        console.error('Error retrieving document:', err);
        res.status(500).send('Internal Server Error');
      } else if (!document) {
        res.status(404).send('Document not found');
      } else {
        // Render the data using EJS template
        res.render('index', { message: document.message });
      }

      client.close();
    });
  });
});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
