import React from 'react'
import './Subtotal.scss';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../context/StateProvider';
import { getCartAmount } from '../../context/reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const [{ cart }] = useStateValue();
    const history = useHistory();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items):
                            <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartAmount(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={_ => history.push('/payment')}className="subtotal__checkout-btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
