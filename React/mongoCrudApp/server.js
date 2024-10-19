const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();
const port = 9000;
const mongoUrl = 'mongodb+srv://welcome2:Welcome2@clusterdb.w1z2zfp.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'sample_mflix';

app.use(express.json());

app.get('/api/users', (req, res) => {
  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      res.status(500).json({ error: 'Error connecting to the database' });
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('Samples');

    collection.find().toArray((err, users) => {
      if (err) {
        res.status(500).json({ error: 'Error retrieving users from the database' });
        return;
      }

      res.json(users);
    });
  });
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;

  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      res.status(500).json({ error: 'Error connecting to the database' });
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insertOne(newUser, (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Error adding user to the database' });
        return;
      }

      res.status(201).json(result.ops[0]);
    });
  });
});

app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      res.status(500).json({ error: 'Error connecting to the database' });
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.updateOne({ _id: new ObjectID(userId) }, { $set: updatedUser }, (err) => {
      if (err) {
        res.status(500).json({ error: 'Error updating user in the database' });
        return;
      }

      res.sendStatus(200);
    });
  });
});

app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  MongoClient.connect(mongoUrl, (err, client) => {
    if (err) {
      res.status(500).json({ error: 'Error connecting to the database' });
      return;
    }

    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.deleteOne({ _id: new ObjectID(userId) }, (err) => {
      if (err) {
        res.status(500).json({ error: 'Error deleting user from the database' });
        return;
      }

      res.sendStatus(204);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
