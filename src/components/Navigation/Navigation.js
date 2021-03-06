import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Navigation.css';
import logo from '../../images/myb.svg';
import useAuth from '../../hooks/useAuth';

const activeStyle = {
    borderTop: '2px solid #fff',
    borderBottom: '2px solid #fff',
}

const Navigation = () => {
    const [burgerItem, setBurgerItem] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const { user, logout } = useAuth();

    const mobileDevice = useMediaQuery('(max-width:830px)');

    const handleClick = () => {
        setBurgerItem(!burgerItem);
    }

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    const handleLogoClick = () => {
        history.push('/');
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        logout();
        history.push('/');
    }


    return (
        <Box className="app-bar" sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: '#04293a' }}>
                <Toolbar>
                    <span href="/#" className={!mobileDevice ? 'display-none' : 'nav-icon'} onClick={handleClick}>
                        <FaBars style={{ height: 24, width: 24 }} />
                    </span>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, }} style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={logo}
                            sx={{ width: 60, height: 60, p: 1 }}
                            className={mobileDevice ? 'display-none' : ''}
                            style={{ cursor: 'pointer' }}
                            onClick={handleLogoClick}
                        />

                        <small className={mobileDevice ? 'display-none' : ''} style={{ color: '#c39052' }}>Stylish Watch</small>
                    </Typography>
                    <Box className={mobileDevice ? 'display-none' : 'nav topBotomBordersOut'}>
                        <NavLink activeStyle={activeStyle} to="/dashboard" className="nav-item">
                            {user?.displayName}
                        </NavLink>

                        {
                            location.pathname === '/' ? <NavLink activeStyle={activeStyle} to="/" className="nav-item">
                                Home
                            </NavLink> :
                                <NavLink activeStyle={activeStyle} to="/home" className="nav-item">
                                    Home
                                </NavLink>
                        }

                        {
                            user.email && <NavLink activeStyle={activeStyle} to="/dashboard" className="nav-item">
                                Dashboard
                            </NavLink>
                        }

                        <NavLink activeStyle={activeStyle} to="/products" className="nav-item">
                            All Products
                        </NavLink>

                        {
                            user.email ?
                                <a href="/" onClick={handleLogOut} className="nav-item">Log out</a>
                                :
                                <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/login" className="nav-item">
                                    Login
                                </NavLink>
                        }

                    </Box>
                    <Avatar
                        alt="Remy Sharp"
                        src={logo}
                        sx={{ width: 40, height: 40, p: 1 }}
                        className={!mobileDevice ? 'display-none' : 'nav-icon'}
                    />
                </Toolbar>
            </AppBar>

            <Box sx={{ bgcolor: '#04293a' }} className={burgerItem ? 'burger-menu-item burger-menu-visible' : 'burger-menu-item'}>
                <AiOutlineClose className="icon-close" onClick={handleClick} />
                <NavLink activeStyle={activeStyle} to="/dashboard" className="nav-item">
                    {user?.displayName}
                </NavLink>

                {
                    location.pathname === '/' ? <NavLink activeStyle={activeStyle} to="/" className="nav-item">
                        Home
                    </NavLink> :
                        <NavLink activeStyle={activeStyle} to="/home" className="nav-item">
                            Home
                        </NavLink>
                }

                {
                    user.email && <NavLink activeStyle={activeStyle} to="/dashboard" className="nav-item">
                        Dashboard
                    </NavLink>
                }

                <NavLink activeStyle={activeStyle} to="/products" className="nav-item">
                    All Products
                </NavLink>

                {
                    user.email ?
                        <a href="/" onClick={handleLogOut} className="nav-item">Log out</a>
                        :
                        <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/login" className="nav-item">
                            Login
                        </NavLink>
                }
            </Box>
        </Box >
    );
};

export default Navigation;