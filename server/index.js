const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const stripeSecretKey = require('stripe')(/* YOUR STRIPE PRIVATE KEY HERE */);

// App Config
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved BOOM!!', total);

    const paymentIntent = await stripeSecretKey.paymentIntents.create({
        amount: total,
        currency: "inr"
    });
    // OK - and created something
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})


app.listen(port, _ => {
    console.log(`Listening on port ${port}`)
});