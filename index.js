const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sarbottam_:mongodbpassword@clusterdevelopment.20pbivv.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDevelopment";

const app = express()
const port = process.env.port || 3000;
app.use(express.static('public_html'))
app.use(express.urlencoded({ extended: false }));



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runConnection() {
  try {
    // Connecting the client to the server
    await client.connect();
    console.log("Connected client to mongodb");
     
    // Creating database and its collection
    const database = client.db("item");
    const collection = database.collection("watch");


    console.log("Created database");
  } catch (err) {
    console.error(err);
  }
}
runConnection();


// Creating global variable to be used inside functions
const collection = client.db("item").collection("watch");


// Adding post request with the form in HTML file
app.post('/submit', async (req, res) => {
  const item_name = req.body.item_name;
  const item_color = req.body.item_color;
  const item_image_url = req.body.item_image_url;
  const item_description = req.body.item_description;
  
  try {
    await collection.insertOne({ item_name, item_color, item_image_url, item_description });
    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});


// Creating route to check the items api
app.get('/api/items', async (req, res) => {
  try {
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, function () {
  console.log(`Web server running at: http://localhost:${port}`)
})
