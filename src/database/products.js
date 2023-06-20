const { ObjectId } = require('mongodb');
const getDb = require('./db');

const getAllProducts = async () => {
    // if we set a find funciton without any argument it will find all (in this case products)
    return await getDb().products.find().toArray();
};

const getProduct = async (id) => {
    return await getDb().products.findOne({ _id: new ObjectId(id) });
};

module.exports = {
    getAllProducts,
    getProduct,
};