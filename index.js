const express = require("express")
const ejs = require("ejs")
const path = require('path');
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static'), {
    etag: false,
  }));
  var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/firestore");
  var firebaseConfig = {
    apiKey: "AIzaSyDSSeuU8iHnoN3ucTzTFhfn6GylKIqasL0",
    authDomain: "escuela-32bef.firebaseapp.com",
    databaseURL: "https://escuela-32bef.firebaseio.com",
    projectId: "escuela-32bef",
    storageBucket: "escuela-32bef.appspot.com",
    messagingSenderId: "913904034443",
    appId: "1:913904034443:web:822c99f3fdd229fddbea8e",
    measurementId: "G-K2VS202KHJ"
    };
    firebase.initializeApp(firebaseConfig);
app.listen(3000, ()=>{
    console.log("hola")
})
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/blog/:id",  function(req, res){
    const { id }= req.params
    var firebase = require("firebase/app");
    var db = firebase.firestore()
    var busicess =db.collection("blog");
    let cityRef = busicess.doc(id);
  
    let getDoc = cityRef.get()
      .then(doc => {
        if (!doc.exists) { 
          return 
        } else {
          res.render("blog", doc.data())
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
   })
   app.get("/categoria/:id",  function(req, res){
    const { id }= req.params
    res.render("categoria")
   })
   app.get("/app",  function(req, res){
    const { id }= req.params
    var firebase = require("firebase/app");
    res.render("app")
      
   })
 