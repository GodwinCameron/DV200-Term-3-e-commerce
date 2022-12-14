const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
require('dotenv/config');

app.use(cors({
        origin: 'http://localhost:3000'
    }));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

mongoose.connect(process.env.DB_CONNECTION,  (err)=>{
    if(err){
        console.log("Could not connect to database, Error: ", err)
    } else{
        console.log("Mongo DB Atlas Connection Established");
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log(`Server started on port: ${PORT}`)});



