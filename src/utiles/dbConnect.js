"use server"
import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = (collectionName) => {
    const uri = process.env.DB_URL
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db('basicNext').collection(collectionName);
};

export default dbConnect;