import React, { useState, useEffect } from 'react'
import './Payment.scss';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartAmount } from '../../context/reducer';
import ErrorIcon from '@material-ui/icons/Error';
import axios from '../../axios';
import { db } from '../../firebase';
import { emptyCart } from '../../context/actions';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payments/create?total=${getCartAmount(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [cart])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    cart,
                    amount: paymentIntent.amount/100,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch(emptyCart())
            history.replace('/order-complete');
        }).catch(error => {
            if (!user) {
                setError('Please login before you proceed to pay');
            }
        })
    }

    const handleChange = e => {
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{cart?.length}</Link> items)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Country</p>
                        <p>Pune</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__price-container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartAmount(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button className="payment__buy-btn" disabled={processing || disabled || succeeded}>
                                    <span>
                                        {processing ? <p>Processing</p>
                                            : "Buy Now"}
                                    </span>
                                </button>
                            </div>
                            {error && <div className="payment__error">
                                <ErrorIcon />
                                {error}
                            </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
