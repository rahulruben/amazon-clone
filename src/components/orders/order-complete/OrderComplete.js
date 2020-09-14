import React, { useEffect, useState } from 'react'
import './OrderComplete.scss';
import { useStateValue } from '../../../context/StateProvider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { db } from '../../../firebase';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

function OrderComplete() {
    const [{ user }] = useStateValue();
    const [confirmedOrder, setConfirmedOrder] = useState([]);
    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setConfirmedOrder(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))[0])
                ))
        } else {
            setConfirmedOrder([]);
        }

    }, [user])
    console.log(confirmedOrder)
    return (
        <div className="order-complete">
            <div className="order-complete__container">
                <img className="amz-logo" alt="" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
                <div className="order-complete__message">
                    <CheckCircleIcon />
                    <h1>Hello, {user ? user.email : ''}</h1>
                    <h3>Your order has been confirmed and will be shipped in next five days</h3>
                </div>
                <div className="order-complete__summary">
                    <span className="summary__item">
                        <span className="summary__title">Order Date</span>
                        <span className="summary__value">{moment.unix(confirmedOrder.data?.created).format('MMMM Do YYYY')}</span>
                    </span>
                    <span className="summary__item">
                        <span className="summary__title">Order Number</span>
                        <span className="summary__value">{confirmedOrder.id}</span>
                    </span>
                    {/* <span className="summary__item">
                        <span className="summary__title">Shipping Address</span>
                        <span className="summary__value">Pune</span>
                    </span> */}
                </div>
                {
                    confirmedOrder.data?.cart?.map((product, index) => (
                        <div className="order-complete__product" key={index}>
                            <img src={product.image} alt="" />
                            <p className="product__name">{product.title}</p>
                            <span className="product__price">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>{value}</>
                                    )}
                                    decimalScale={2}
                                    value={product.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            </span>
                        </div>
                    ))

                }
                <div className="product__total">
                    <div className="product__total-item">
                        <span className="product__total-item-title">Subtotal</span>
                        <span className="product__total-item-amount">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>{value}</>
                                )}
                                decimalScale={2}
                                value={confirmedOrder.data?.amount || 0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </span>
                    </div>
                    <div className="product__total-item">
                        <span className="product__total-item-title">Shipping Fee</span>
                        <span className="product__total-item-amount">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>{value}</>
                                )}
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </span>
                    </div>
                    <div className="product__total-item">
                        <span className="product__total-item-title">GST</span>
                        <span className="product__total-item-amount">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>{value}</>
                                )}
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </span>
                    </div>
                    <div className="product__total-item">
                        <span className="product__total-item-title">Discount</span>
                        <span className="product__total-item-amount">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>{value}</>
                                )}
                                decimalScale={2}
                                value={0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </span>
                    </div>
                    <div className="product__total-item total">
                        <span className="product__total-item-title">Total</span>
                        <span className="product__total-item-total">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>{value}</>
                                )}
                                decimalScale={2}
                                value={confirmedOrder.data?.amount || 0}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OrderComplete;
