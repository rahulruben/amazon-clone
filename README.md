# Amazon Clone

Amazon clone a amazon representation in ReactJS using the Context API for state management<br />
Firestore is used to store all the orders confirmed by the user<br />
Used Email Authentication API from firebase to setup a Sign-up and Sign-In.
Used Stripe for payment and confirming the order.

[Dashboard](https://amz-clone-6882b.web.app/)

## Technology Stack
**UI Layer**: [React](https://reactjs.org/)<br />
**State Management**: React's Context API<br />
**Database**: Firestore<br />
**Payment**: [Stripe](https://stripe.com/)<br />
**Authentication**: Firebase Email Authentication<br />
**API**: Axios<br />
**Server**: Node

**Features:**

1. Email Sign In and Sign up functionality.
2. Add/Remove Products.
3. Stripe payment confirmation.
4. View Order placed receipt.
5. View past confirmed orders.
6. Error messages for invalid card number and if the user is not signed in.


**Stripe Payment setup:**
1. Create a stripe account.
2. Go to Dashboard.
3. Copy `Publishable key` and add to the `stripe.js` file in the root directory
4. Copy `Secret key` and add to the `/server/index.js` file.

## Installation

### `npm install`

## Scripts

In the project directory, you can run:

### `npm start` in the root directory to spin up UI

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm start` in the `/server` directory to spin up the server
Opens the server for accepting API requests: [http://localhost:5000](http://localhost:5000)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
