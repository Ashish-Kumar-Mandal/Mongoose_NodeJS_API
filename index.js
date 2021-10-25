const express = require('express');
const multer = require('multer');
require('./config');
const Product = require('./products');

const app = express();
app.use(express.json());

const upload = multer({
    storage:multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploads")
        },
        filename: function(req, file, cb) {
            cb(null, file.filename + "-" + Date.now() + ".jpeg")
        }
    })
}).single("user_file");

app.get('/select', async (req,res)=>{
    let data = await Product.find();
    res.send(data);
});

app.post('/insert', async (req, res)=>{
    let data = new Product(req.body);
    let result = await data.save();
    let msg = ""
    result._id ? msg = "New Record Saved Successfully" : msg = "Insertion Failed"
    res.send(msg) 
});

app.put('/update/:_id', async (req,res)=>{
    let result = await Product.updateOne(req.params, {$set:req.body});
    let msg = ""
    result.acknowledged ? result.modifiedCount>0 ? msg = result.modifiedCount+" Records Modified Successfully" : msg = "Records Not Found" : msg = "Updation Failed"  
    res.send(msg)
});

app.delete('/delete/:_id', async (req,res)=>{
    let result = await Product.deleteOne(req.params);
    let msg = ""
    result.deletedCount>0 ? msg = result.deletedCount+" Records Deleted Successfully" : msg = "Records Not Found" 
    res.send(msg)
});

app.get('/search/:key', async (req,res)=>{
    let data = await Product.find({
        $or:[
            {"name":{$regex:req.params.key}},
            {"model":{$regex:req.params.key}}
        ]
    });
    res.send(data);
});

app.post('/upload', upload, (req, res)=>{
    res.send("file uploaded");
});

app.listen(4545);