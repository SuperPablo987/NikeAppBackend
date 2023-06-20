const getDb = require('./db');

const getOrder = async (ref) => {
    return await getDb().orders.findOne({ ref });
};

const createOrder = async (order) => {
    const result = await getDb().orders.insertOne(order);
    return { ...order, _id: result.insertedId };

};

module.exports = {
    getOrder,
    createOrder,
};