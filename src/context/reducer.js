import actionTypes from "./actionTypes";

export const initialState = {
    cart: [],
    user: null,
    sideBarVisiblity: false
};

export const getCartAmount = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload.item]
            }
        case actionTypes.REMOVE_FROM_CART:
            const index = state.cart.findIndex(
                cartItem => cartItem.id === action.payload.id
            );
            let newCart = [...state.cart];
            if (index >= 0)
                newCart.splice(index, 1);
            return { ...state, cart: newCart }
        case actionTypes.EMPTY_CART:
            return { 
                ...state,
                cart: []
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case actionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sideBarVisiblity: action.payload.sideBarVisiblity
            }
        default:
            return state;
    }
};

export default reducer;