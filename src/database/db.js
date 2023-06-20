const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://thiel:UuMTWjzr1lipc3gv@cluster0.xgqlv2t.mongodb.net/?retryWrites=true&w=majority';

let client;

const getDb = () => {

    if(!client){
        client = new MongoClient(uri);
    }

    const database = client.db('test');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return {
        products, 
        orders,
    };
};

module.exports = getDb;