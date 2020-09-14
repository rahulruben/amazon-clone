import React from 'react'
import './Checkout.scss';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../checkoutproduct/CheckoutProduct';

function Checkout() {
    const [{ cart, user }] = useStateValue();
    return (
        <div className="checkout">
            <section className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg"
                    alt=""
                />
                <div className="checkout__title">
                    <h3>Hello,  {user?.email}</h3>
                    <h2>Shopping Cart</h2>
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
            </section>
            <section className="checkout__right">
                <Subtotal />
            </section>
        </div>
    )
}

export default Checkout;
