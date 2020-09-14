import React from 'react'
import './Header.scss';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import { toggleSideBar } from '../../context/actions';

function Header() {
    const [{ cart, user, sideBarVisiblity }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const showSidebar = _ => {
        dispatch(toggleSideBar(!sideBarVisiblity))
        document.body.classList.add('hide-overflow');
    }

    return (
        <header className="header">
            <IconButton onClick={showSidebar}>
                <MenuIcon />
            </IconButton>
            <Link to="/">
                <img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header__search">
                <input className="header__search-input" type="text" />
                <SearchIcon className="header__search-icon" />
                {/* <button></button> */}
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__option--lineOne">
                            Hello, {user ? user.email : 'Guest'}
                        </span>
                        <span className="header__option--lineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__option--lineOne">
                            Returns
                    </span>
                        <span className="header__option--lineTwo">
                            & Orders
                    </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__option--lineOne">
                        Your
                    </span>
                    <span className="header__option--lineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__cart">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__cart-count">{cart?.length}</span>
                    </div>
                </Link>

            </div>
        </header>
    )
}

export default Header
