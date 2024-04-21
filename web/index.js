const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const jwt = require('jsonwebtoken');

// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.flmxcne.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const categoriesCollection = client.db('saveyou-db').collection('categories');
const productsCollection = client.db('saveyou-db').collection('products');
const locationCollection = client.db('saveyou-db').collection('locations');
const conditionCollection = client.db('saveyou-db').collection('product-conditions');
const orderCollection = client.db('saveyou-db').collection('orders');
const acTypeCollection = client.db('saveyou-db').collection('acTypes');
const userCollection = client.db('saveyou-db').collection('users');

async function run(){
try{

   // get category list by array
   app.get('/categories/', async (req,res)=>{
      const query = {}
      const result = await categoriesCollection.find(query).toArray()
      res.send(result)

   })

   // add new product to db
   app.post('/addproduct', async (req,res)=>{
      const product = req.body;
      const result = await productsCollection.insertOne(product);
      res.send(result);
   })
   // Update user
   app.post('/updateSeller/:email', async (req,res)=>{
      const user = {email : (req.params.email)}
      const data = req.body;
      const result = await userCollection.updateOne(user,{ $set: data},true);
      console.log(user,data);
      res.send(result);
   })

   // add new product to db
   app.post('/addorder', async (req,res)=>{
      const product = req.body;
      const result = await orderCollection.insertOne(product);
      res.send(result);
   })
   // add new user to db
   app.post('/addUser', async (req,res)=>{
      const user = req.body;
     
      const users = await userCollection.findOne({email: user.email});
      if(users == null){

          const result = await userCollection.insertOne(user);
          res.send(result);
      }
      else{

         res.send('User Exists, Login!');
      }
   })

   // get product list
   app.get('/products', async(req,res)=>{
      const query = {};
      const result = await productsCollection.find(query).toArray()
      console.log(query);
      res.send(result);
   })
   // get product list by seller email
   app.get('/products/:sellerId', async(req,res)=>{
      const query = {sellerId: req.params.sellerId};
      const result = await productsCollection.find(query).toArray()
      res.send(result);
   })
   // get userAccount
   app.get('/user/:id', async(req,res)=>{
      const query = {email: req.params.id};
      console.log(query);
      const result = await userCollection.findOne(query)
      
      res.send(result);
   })
   // get User list by type
   app.get('/users/:type', async(req,res)=>{
      
       let query = {};
       if(req.params.type === "Buyer" || req.params.type === "Seller"){
          query = {acType: req.params.type}
         } else if(req.params.type === "all"){
            query = {}
         } else{
            res.status(403).send('Refused by Server')
         }
       
      const result = await userCollection.find(query).toArray()
      
      res.send(result);
   })
   // get order list
   app.get('/orders/:id', async(req,res)=>{
      let query ;
      if(req.params.id === 'all'){
         query = {}
      } else {
         query = {buyerEmail: req.params.id}
      }
      const result = await orderCollection.find(query).toArray()
      res.send(result);
   })
   // get AC types 
   app.get('/actypes', async(req,res)=>{
      const query = {};
      const result = await acTypeCollection.find(query).toArray()
      res.send(result);
   })
   // get single Order info 
   app.get('/order/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id : ObjectId(id)};
      console.log(query);
      const result = await orderCollection.findOne(query)
      res.send(result);
   })
   // get product searched list
   app.get('/search/:id', async(req,res)=>{
     
      const query = { salePrice: req.params.id};
      const result = await productsCollection.find(query).toArray()
      console.log(query);
      res.send(result);
   })
// asaaa
   // get loations
   app.get('/locations',async (req,res)=>{
      const query = {};
      const result = await locationCollection.find(query).toArray()
      res.send(result);
   })
   // get conditions
   app.get('/conditions',async (req,res)=>{
      const query = {};
      const result = await conditionCollection.find(query).toArray()
      res.send(result);
   })
   // get products by category
   app.get('/category/:id', async (req,res)=>{
      const query = {category: req.params.id};
      const result = await productsCollection.find(query).toArray();
     res.send(result);
      
   })
   // get products by Ads
   app.get('/ads', async(req,res)=>{
      const query = {ad: true};
      const result = await productsCollection.find(query).toArray()
      console.log(query);
      res.send(result);
   })




}
finally{
    
}


}
run().catch(error=> console.log(error));



app.get('/', async (req,res)=>{
   res.send('Server Running');
})
app.listen(port,()=>{
   console.log('Server running on port',port);
})

