const express = require('express');
const productSchema = require('./models/products');
const clientSchema = require('./models/Clients');
const orderSchema = require('./models/Orders');


const router = express();





// Product Routes =============================================================================================
router.post('/api/addproduct', (req, res) =>{
    const newProduct = new productSchema({
        productName: req.body.productName,
        inStock: req.body.inStock,
        variations: {
            size: req.body.variations.size,
            colour: req.body.variations.colour
        },
        price: req.body.price
    });

    // .save(); runs to db
    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err =>{
        res.status(400).json({msg: "There was an error", err});
    })
}),

router.get('/api/allproducts', async (req, res) =>{
    const findProducts = await productSchema.find();
    res.json(findProducts);
});


router.get('/api/oneproduct/:id', async (req, res) =>{
    const findProduct = await productSchema.findById(req.params.id);
    res.json(findProduct)
});

router.delete('/api/deleteproduct/:id', async (req, res) =>{
    const delProduct = await productSchema.remove({_id:req.params.id});
    res.json(delProduct)
});

router.patch('/api/updateproduct/:id', async (req, res) =>{
    const updProduct = await productSchema.updateOne(
        {_id: req.params.id},
        {$set: {productName: req.body.productName}}
    );
    res.json(updProduct)
});







// Client Routes =============================================================================================
router.post('/api/addclient', (req, res) =>{
    const newClient = new clientSchema({
        userName: req.body.userName,
        password: req.body.password
    });

    // .save(); runs to db
    newClient.save()
    .then(item => {
        res.json(item);
    })
    .catch(err =>{
        res.status(400).json({msg: "There was an error", err});
    })
}),

router.get('/api/allclients', async (req, res) =>{
    const findClients = await clientSchema.find();
    res.json(findClients);
});


router.get('/api/oneclient/:id', async (req, res) =>{
    const findClient = await clientSchema.findById(req.params.id);
    res.json(findClient)
});

router.delete('/api/deleteclient/:id', async (req, res) =>{
    const delClient = await clientSchema.remove({_id:req.params.id});
    res.json(delClient)
});

router.patch('/api/updateclient/:id', async (req, res) =>{
    const updClient = await clientSchema.updateOne(
        {_id: req.params.id},
        {$set: {userName: req.body.userName}}
    );
    res.json(updClient)
});










// Order Routes =============================================================================================

// clientInfo: {
//     clientName: {type:String, required:true}
// },
// productName: {
//     type: String,
//     required: true
// },
// date: {
//     type: Date,
//     default: Date.now
// },
// price: {
//     type: Number,
//     required: true
// }

router.post('/api/addorder', (req, res) =>{
    const newOrder = new orderSchema({
        clientInfo: {clientName: req.body.clientInfo.clientName},
        productName: req.body.productName,
        productId: req.body.productId,
        price: req.body.price,
        amount: req.body.amount
    });
    // .save(); runs to db
    newOrder.save()
    .then(item => {
        res.json(item);
    })
    .catch(err =>{
        res.status(400).json({msg: "There was an error", err});
    })
}),

router.get('/api/allorders', async (req, res) =>{
    const findOrders = await orderSchema.find();
    res.json(findOrders);
});


router.get('/api/oneorder/:id', async (req, res) =>{
    const findOrder = await orderSchema.findById(req.params.id);
    res.json(findOrder)
});

router.delete('/api/deleteorder/:id', async (req, res) =>{
    const delOrder = await orderSchema.remove({_id:req.params.id});
    res.json(delOrder)
});

router.patch('/api/updateorder/:id', async (req, res) =>{
    const updOrder = await orderSchema.updateOne(
        {_id: req.params.id},
        {$set: {price: req.body.price}}
    );
    res.json(updOrder)
});





module.exports = router;