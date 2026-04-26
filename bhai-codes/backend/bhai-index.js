require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-x3a3a4y-shard-00-00.l2iluak.mongodb.net:27017,ac-x3a3a4y-shard-00-01.l2iluak.mongodb.net:27017,ac-x3a3a4y-shard-00-02.l2iluak.mongodb.net:27017/?ssl=true&replicaSet=atlas-xlacbh-shard-0&authSource=admin&appName=Cluster0";`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

let productCollection;

async function run() {
    try {
        await client.connect();
        const db = client.db("productDB");
        productCollection = db.collection("products");
        console.log("MongoDB Connected");

    } catch (err) {
        console.error(err);
    }
}
run();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});