const collectionName = require('../config').collection_name;
const getCol = require('./mongo').getCollection;
const {ObjectID} = require('mongodb');

async function getOne(query) {
  const collection = await getCol();
  return await collection.findOne(query);
}
async function getMultiple(query) {
  const collection = await getCol();
  return await collection.find(query).toArray();
}

async function getAll() {
  return await getMultiple({});
  //return [{name: 'Alex'}, {name: 'Isabelle'}];
}

async function getID(id) {
  return await getOne({ _id: new ObjectID(id) });
}

async function deleteID(id) {
  const collection = await getCol();
  collection.deleteOne({ _id: new ObjectID(id) });
}


async function updateOne(id, object) {
  const database = await getDatabase();
  delete ad._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id) },
    { $set: { ...object }, } );
}

module.exports = {
  getAll,
  getID
};
