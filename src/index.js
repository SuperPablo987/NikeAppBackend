const express = require('express');
const productRoutes = require('./router/productRoutes');
const orderRoutes = require('./router/orderRoutes');
const bodyParser = require('body-parser');
const paymentRoutes = require('./router/paymentRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);

app.get('/', (req, res) => {
    res.send("<h2>Hello world - Nike Backend</h2>");
});

app.listen(PORT, () => {
    console.log("You're live baby!", PORT)
});