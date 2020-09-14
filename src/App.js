import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';

import Orders from './components/orders/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Sidebar from './components/sidebar/Sidebar';
import Payment from './components/payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { setUser } from './context/actions';
import OrderComplete from './components/orders/order-complete/OrderComplete';
import stripeKey from './stripe';

const promise = loadStripe(stripeKey);

function App() {
	const [{ }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			if (authUser) {
				dispatch(setUser(authUser));
			} else {
				dispatch(setUser(null))
			}
		});
	}, [dispatch])
	return (
		<Router>
			<div className="app">
				<Sidebar />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/order-complete">
						<Header />
						<OrderComplete />
					</Route>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
