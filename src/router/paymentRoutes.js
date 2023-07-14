const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    'sk_test_51NIzRCALuumpFykvgO2JtgEjnD8QwnAAGWWjsQStcwHaZbp71BdcLgkYNRyUCa8IWO8lMco3bIZg0UDnWiCEyafW00wdPOKGsc'
);

// router endpoints 
router.post('/intents', async (req, res) => {
    try {
        // create PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount, // Integer, usd -> pennies, eur -> cents
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });
        
        // return the secret
        res.json({ paymentIntent: paymentIntent.client_secret });
        
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
});

module.exports = router;