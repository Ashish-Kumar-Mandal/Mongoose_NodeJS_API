const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const ProductsSchema = mongoose.Schema({
    name : String,
    model : String,
    price : Number,
    offer : String
});

const saveInDB = async ()=>{    
    const Product = mongoose.model('products', ProductsSchema);
    let data = new Product({
        name : 'Mi',
        model : 'mi 11',
        price : '9899',
        offer : 'upto 99% discount'
    });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async ()=>{
    const Product = mongoose.model('products', ProductsSchema);
    let data = await Product.updateOne(
        {name:'MI 6'},
        {
            $set:{price:99}
        }
    );
    console.log(data);
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', ProductsSchema);
    let data = await Product.deleteOne({name:'MI 6'});
    console.log(data);
}

const findInDB = async ()=>{
    const Product = mongoose.model('products', ProductsSchema);
    // let data = await Product.find();
    let data = await Product.find({name:'Mi'}); // search records.
    console.log(data);
}

findInDB();
// saveInDB();
// updateInDB();
// deleteInDB();