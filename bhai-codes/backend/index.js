
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

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

let productCollection;
async function run() {
  // try {

  // } finally {
  //   // Ensures that the client will close when you finish/error
  //   await client.close();
  // }

  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  const db = client.db("productDB");
  productCollection = db.collection("products");
}
run().catch(console.dir);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// GET ALL API
app.get("/api/products", async (request, response) => {
  try {
    const result = await productCollection.find({}).toArray();
    response.send(result);

  } catch (error) {
    console.error("Error occured!", error);
    response.result(500).send({ message: 'Error hoise!' });
  }
});

// CREATE ONE API
app.post("/api/products", async (request, response) => {
  try {
    const product = request.body;
    const result = await productCollection.insertOne(product);
    response.send(result);

  } catch (error) {
    console.error("Error occured!", error);
    response.result(500).send({ message: 'Error hoise!' });
  }
});

// UPDATE ONE API
app.put("/api/products/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const { _id, ...rest } = request.body;

    const result = await productCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: rest }
    );

    response.send(result);
  } catch (error) {
    console.error("Error occured!", error);
    response.result(500).send({ message: 'Error hoise!' });
  }
});

// GET ONE API
app.get("/api/products/:id", async (request, response) => {
  try {
    const id = request.params.id;

    if (!ObjectId.isValid(id)) {
      return response.status(400).send({ message: "Invalid product id" });
    }
    const result = await productCollection.findOne({ _id: new ObjectId(id) });

    response.send(result);
  } catch (error) {
    console.error("Error occured!", error);
    response.result(500).send({ message: 'Error hoise!' });
  }
});

// DELETE ONE API
app.delete("/api/products/:id", async (request, response) => {
  try {
    const id = request.params.id;

    if (!ObjectId.isValid(id)) {
      return response.status(400).send({ message: "Invalid product id" });
    }
    const result = await productCollection.deleteOne({ _id: new ObjectId(id) });

    response.send(result);
  } catch (error) {
    console.error("Error occured!", error);
    response.result(500).send({ message: 'Error hoise!' });
  }
});