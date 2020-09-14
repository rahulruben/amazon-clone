import actionTypes from "./actionTypes"

const setUser = (user) => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            user
        }
    }
}

const addToCart = (id, title, image, price, rating) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        }
    }
}

const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id
        }
    }
}

const toggleSideBar = (sideBarVisiblity) => {
    return {
        type: actionTypes.TOGGLE_SIDEBAR,
        payload: {
            sideBarVisiblity
        }
    }
}

const emptyCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    }
}

export { setUser, removeFromCart, toggleSideBar, emptyCart, addToCart }