import { MongoClient } from 'mongodb';

require('dotenv').config();

let URL: any = process.env.MONGO_CONNECTION;
let client: any = null;
client = new MongoClient(URL);

export async function connect() {
  if(!client) await client.connect();
  console.log('Connected to MongoDB');
  return client.db(process.env.MONGO_DATABASE);
}

export async function disconnect() { 
  if (!client) return true;
  await client.close();
  client = null;
  return true;
}
