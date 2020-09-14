import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.scss';
import { useStateValue } from '../../context/StateProvider';
import { addToCart } from '../../context/actions';

function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i}/>
                    ))}
                </p>
            </div>
            <img src={image} alt="" />
            <button onClick={_ => dispatch(addToCart(id, title, image, price, rating))} className="product__add-btn">Add to Cart</button>
        </div>
    )
}

export default Product
