const DEBUG_MODE = true;

const MONGO_URI = "mongodb+srv://Admin:TestPassword1@maincluster.lzdrc.mongodb.net/TestDatabase?retryWrites=true&w=majority";
const COLLECTION_NAME = "TestCollection";
const DATABASE_NAME = "TestDatabase";

const constants = {
  db_uri: MONGO_URI,
  collection_name: COLLECTION_NAME,
  database_name: DATABASE_NAME
}

const debug = {
  httpPort: 3000,
  httpsPort: 3001
};

const release = {
  httpPort: 4000,
  httpsPort: 4001
};

module.exports = {...(DEBUG_MODE ? debug : release), ...constants};
