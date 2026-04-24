
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v2kjlhg.mongodb.net/?appName=Cluster0`;
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-uikagwn-shard-00-00.v2kjlhg.mongodb.net:27017,ac-uikagwn-shard-00-01.v2kjlhg.mongodb.net:27017,ac-uikagwn-shard-00-02.v2kjlhg.mongodb.net:27017/?ssl=true&replicaSet=atlas-yigrxl-shard-0&authSource=admin&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
