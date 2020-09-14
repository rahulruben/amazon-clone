import React from 'react'
import './Sidebar.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../context/StateProvider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { toggleSideBar } from '../../context/actions';

function Sidebar() {
    const [{ user, sideBarVisiblity }, dispatch] = useStateValue();

    const items = [
        'Echo & Alexa',
        'Fire TV Stick',
        'Kindle E-Readers & eBooks',
        'Audible Audiobooks',
        'Amazon Prime Video',
        'Amazon Prime Music'
    ]

    const hideSidebar = _ => {
        dispatch(toggleSideBar(false));
        document.body.classList.remove('hide-overflow');
    }

    const onOverlayClicked = e => {
        e.target.classList.contains('sidebar__overlay') && hideSidebar();
    }

    return (
        <div className={`sidebar ${sideBarVisiblity ? "opened" : ""}`} onClick={onOverlayClicked}>
            <div className="sidebar__overlay"></div>
            <div className="sidebar__container">
                <header className="sidebar__header">
                    <AccountCircleIcon />
                    <h3 className="sidebar__title">Hello, {user ? user.email : 'Sign In'}</h3>
                    <IconButton className="header__close" onClick={hideSidebar} >
                        <CloseIcon />
                    </IconButton>
                </header>
                <section className="sidebar__items">
                    <ul>
                        <h4 className="sidebar__category">SHOP BY CATEGORY</h4>
                        {
                            items?.map((item, index) => (
                                <li key={index} className="sidebar__item">
                                    {item}
                                    <ArrowForwardIosIcon />
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Sidebar;
