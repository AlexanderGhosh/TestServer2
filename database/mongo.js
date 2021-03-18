// ./src/database/mongo.js
const {MongoClient} = require('mongodb');
const URI = require('../config').db_uri;

const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
let collection = null;

async function startDatabase() {
  try{
    console.log("Connection Called ##########################################");
    await client.connect();
    collection = client.db("TestDatabase").collection("TestCollection");
  }
  catch (e) {
    console.log('******************************************************************');
    console.error(e);
    console.log('******************************************************************');
  }
}

async function getCollection() {
  if (!collection) {
    await startDatabase();
  }
  return collection;
}

async function close() {
  await client.close();
}

module.exports = {
  getCollection,
  startDatabase,
  close
};
