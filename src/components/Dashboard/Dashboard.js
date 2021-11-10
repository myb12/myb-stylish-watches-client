import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch, NavLink, useLocation } from "react-router-dom";
import { MdDashboardCustomize, MdManageAccounts, MdPayment, MdReviews } from 'react-icons/md';
import { useState } from 'react';
import './Dashboard.css'
import { BsMinecartLoaded } from 'react-icons/bs';
import MyOrders from './User/MyOrders/MyOrders';
import Review from './User/Review/Review';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import { AiFillSetting, AiOutlineRollback } from 'react-icons/ai';
import { GoDiffAdded } from 'react-icons/go';
// import DashboardHome from '../DashboardHome/DashboardHome';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
// import useAuth from '../../../hooks/useAuth'
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 260;

function Dashboard(props) {
    const { window } = props;
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    let { path, url } = useRouteMatch();
    // const { admin } = useAuth();
    const dashboardPageUrl = location.pathname.split('/dashboard/')[1];
    console.log(dashboardPageUrl);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to="/" className="dashboard-item">
                        <span className="dashboard-item-content">
                            <AiOutlineRollback style={{ marginRight: 10, }} />
                            Back to home
                        </span>
                    </Link>
                </Button>
            </List>

            <Divider />


            {/* {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                    <Link to={`${url}/addDoctor`}><Button color="inherit">Add a Doctor</Button></Link>
                </Box>
            } */}
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to="/home" className="dashboard-item" style={{ borderLeft: !dashboardPageUrl && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <MdDashboardCustomize style={{ marginRight: 10, }} />
                            Dashboard
                        </span>
                    </Link>
                </Button>
            </List>
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to="/home" className="dashboard-item">
                        <span className="dashboard-item-content">
                            <MdPayment style={{ marginRight: 10, }} />
                            Pay
                        </span>
                    </Link>
                </Button>
            </List>
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/myOrders`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'myOrders' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <BsMinecartLoaded style={{ marginRight: 10, }} />
                            My order
                        </span>
                    </Link>
                </Button>
            </List>
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/review`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'review' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <MdReviews style={{ marginRight: 10, }} />
                            Review
                        </span>
                    </Link>
                </Button>
            </List>

            <Divider />

            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/manageAllOrders`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'manageAllOrders' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <BsMinecartLoaded style={{ marginRight: 10, }} />
                            Manage all Orders
                        </span>
                    </Link>
                </Button>
            </List>

            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/addProduct`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'addProduct' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <GoDiffAdded style={{ marginRight: 10, }} />
                            Add a Product
                        </span>
                    </Link>
                </Button>
            </List>
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/makeAdmin`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'makeAdmin' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <MdManageAccounts style={{ marginRight: 10, }} />
                            Make Admin
                        </span>
                    </Link>
                </Button>
            </List>
            <List style={{ padding: "0" }}>
                <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                    <Link to={`${url}/manageProducts`} className="dashboard-item" style={{ borderLeft: dashboardPageUrl === 'manageProducts' && '2px solid #04293a' }}>
                        <span className="dashboard-item-content">
                            <AiFillSetting style={{ marginRight: 10, }} />
                            Manage Products
                        </span>
                    </Link>
                </Button>
            </List>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#04293a' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" >
                        <Link to="/dashboard" className="dashboard-nav-item"> Dashboard</Link>
                    </Typography>

                    <NavLink to="/services" className="dashboard-nav-item">
                        Logout
                    </NavLink>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                </Switch>

                {/* <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor />
                    </AdminRoute>
                </Switch> */}
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;