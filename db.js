"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = '<Mongo Connection URL here>';
let dbInstance = null;
module.exports.get = async function () {
  if (dbInstance) {
    return Promise.resolve(dbInstance);
  }
  const db = await MongoClient.connect(MONGODB_URI);
  dbInstance = db.db("bookstore");
  return dbInstance;
}