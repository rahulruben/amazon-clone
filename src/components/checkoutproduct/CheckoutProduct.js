import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.scss';
import { useStateValue } from '../../context/StateProvider';
import { removeFromCart } from '../../context/actions';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();
    
    return (
        <div className="checkout-product">
            <img className="checkout-product__image" src={image} alt="" />
            <div className="checkout-product__info">
                <p className="checkout-product__title">{title}</p>
                <p className="checkout-product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-price__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} />
                    ))}
                </div>
                {!hideButton &&
                    < button onClick={_ => dispatch(removeFromCart(id))}>Remove from Cart</button>
                }
            </div>
        </div >
    )
}

export default CheckoutProduct;
