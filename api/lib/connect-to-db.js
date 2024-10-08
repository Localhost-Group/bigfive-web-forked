const MongoClient = require('mongodb').MongoClient

let cachedDb = null

const uri = process.env.MONGODB_URI

module.exports = async () => {
  if (cachedDb) return cachedDb
  console.log('uuu', uri)

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  const db = await client.db(new URL(uri).pathname.substr(1))

  cachedDb = db

  return db
}
