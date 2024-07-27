const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5001

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!Enjoy Backend')
})


//sohel09
//mPBq9g0oPx2sKX02

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://sohel09:mPBq9g0oPx2sKX02@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

    // const database = client.db("usersDB");
    // const usersCollection = database.collection("users");
    const usersCollection = client.db("usersDB").collection("users");

    //READ
    app.get('/users',async(req,res)=>{
        // const cursor = usersCollection.find()
        // const result = await cursor.toArray()
        const result = await usersCollection.find().toArray()
        res.send(result)
    })

    //CREATE
    app.post('/users',async(req,res)=>{
        const user = req.body
        console.log('new user is ',user)
        const result = await usersCollection.insertOne(user)
        res.send(result)
    })

    //DELETE
    app.delete('/users/:id',async(req,res)=>{
        const id = req.params.id
        console.log('please delete from database',id)
        const query = { _id:new ObjectId(id)};
        const result = await usersCollection.deleteOne(query);
        res.send(result)
    })

    //UPDATE
    app.get('/users/:id',async(req,res)=>{
      const id = req.params.id
      console.log('please UPDATE from database',id)
      const query = { _id:new ObjectId(id)};
      const result = await usersCollection.findOne(query)
      res.send(result)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`my server is running at http://localhost:${port}`)
})