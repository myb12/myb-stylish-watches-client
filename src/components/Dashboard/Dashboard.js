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
import { Avatar, Button, Card, CardContent, Container, Grid } from '@mui/material';
import { Switch, Route, Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { MdDashboardCustomize, MdManageAccounts, MdPayment, MdReviews } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { BsMinecartLoaded } from 'react-icons/bs';
import MyOrders from './User/MyOrders/MyOrders';
import Review from './User/Review/Review';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import { AiFillSetting, AiOutlineRollback } from 'react-icons/ai';
import { GoDiffAdded, GoWatch } from 'react-icons/go';
import useAuth from '../../hooks/useAuth';
import AdminRoute from './Admin/AdminRoute/AdminRoute';
import Pay from './User/Pay/Pay';
import logo from '../../images/myb.svg';
import './Dashboard.css';

const drawerWidth = 280;

function Dashboard(props) {
    const { logout, admin, user } = useAuth()
    const { window } = props;
    const history = useHistory();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [totalOrders, setTotalOrders] = useState([]);
    const [totalProducts, setTotalProducts] = useState([]);

    let { path, url } = useRouteMatch();
    const dashboardPageUrl = location.pathname.split('/dashboard/')[1];
    const notDashboardUrl = location.pathname.split('/')[2];

    useEffect(() => {
        fetch('https://secret-anchorage-33116.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setTotalProducts(data))
    }, [])

    useEffect(() => {
        fetch('https://secret-anchorage-33116.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setTotalOrders(data))
    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleLogOut = (e) => {
        e.preventDefault();
        logout();
        history.push('/');
    }

    const handleLogoClick = () => {
        history.push('/');
    }

    const drawer = (
        <div>
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



            {
                admin ? <>
                    <List style={{ padding: "0" }}>
                        <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                            <Link to={`${url}/manageAllOrders`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'manageAllOrders' && '2px solid #04293a' }}>
                                <span className="dashboard-item-content">
                                    <BsMinecartLoaded style={{ marginRight: 10, }} />
                                    Manage all Orders
                                </span>
                            </Link>
                        </Button>
                    </List>

                    <List style={{ padding: "0" }}>
                        <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                            <Link to={`${url}/addProduct`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'addProduct' && '2px solid #04293a' }}>
                                <span className="dashboard-item-content">
                                    <GoDiffAdded style={{ marginRight: 10, }} />
                                    Add a Product
                                </span>
                            </Link>
                        </Button>
                    </List>
                    <List style={{ padding: "0" }}>
                        <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                            <Link to={`${url}/makeAdmin`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'makeAdmin' && '2px solid #04293a' }}>
                                <span className="dashboard-item-content">
                                    <MdManageAccounts style={{ marginRight: 10, }} />
                                    Make Admin
                                </span>
                            </Link>
                        </Button>
                    </List>
                    <List style={{ padding: "0" }}>
                        <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                            <Link to={`${url}/manageProducts`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'manageProducts' && '2px solid #04293a' }}>
                                <span className="dashboard-item-content">
                                    <AiFillSetting style={{ marginRight: 10, }} />
                                    Manage Products
                                </span>
                            </Link>
                        </Button>
                    </List>
                </> :
                    <>
                        <List style={{ padding: "0" }}>
                            <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                                <Link to="/dashboard" className="dashboard-item" style={{ width: "100%", borderLeft: !dashboardPageUrl && '2px solid #04293a' }}>
                                    <span className="dashboard-item-content">
                                        <MdDashboardCustomize style={{ marginRight: 10, }} />
                                        Dashboard
                                    </span>
                                </Link>
                            </Button>
                        </List>
                        <List style={{ padding: "0" }}>
                            <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                                <Link to={`${url}/pay`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'pay' && '2px solid #04293a' }}>
                                    <span className="dashboard-item-content">
                                        <MdPayment style={{ marginRight: 10, }} />
                                        Pay
                                    </span>
                                </Link>
                            </Button>
                        </List>
                        <List style={{ padding: "0" }}>
                            <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                                <Link to={`${url}/myOrders`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'myOrders' && '2px solid #04293a' }}>
                                    <span className="dashboard-item-content">
                                        <BsMinecartLoaded style={{ marginRight: 10, }} />
                                        My order
                                    </span>
                                </Link>
                            </Button>
                        </List>
                        <List style={{ padding: "0" }}>
                            <Button color="inherit" style={{ width: "100%", justifyContent: "start", }}>
                                <Link to={`${url}/review`} className="dashboard-item" style={{ width: "100%", borderLeft: dashboardPageUrl === 'review' && '2px solid #04293a' }}>
                                    <span className="dashboard-item-content">
                                        <MdReviews style={{ marginRight: 10, }} />
                                        Review
                                    </span>
                                </Link>
                            </Button>
                        </List>
                    </>
            }

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
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Avatar
                        alt="Remy Sharp"
                        src={logo}
                        sx={{ width: 60, height: 60, p: 1 }}
                        style={{ cursor: 'pointer' }}
                        onClick={handleLogoClick}
                    />

                    <a href="/" onClick={handleLogOut} className="dashboard-nav-item">Log out</a>
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
                    {/* Routes for normal user */}
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    {/* Routes for admin */}
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                </Switch>


                {
                    !notDashboardUrl && <>
                        <Box style={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Typography variant="h5">Hello <span style={{ fontWeight: 700, color: '#c39052' }}>{user.displayName}!</span></Typography>
                                <Typography variant="h6" style={{ textAlign: 'center' }}>Welcome to the Dashboard.</Typography>
                            </Box>
                        </Box>

                        <Container maxWidth="md" sx={{ mt: 6 }} className="dashboard-content">
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <Card variant="outlined" style={{ height: 250 }}>
                                        <CardContent>
                                            <Typography style={{ fontSize: 45, fontWeight: 700 }} component="div">
                                                {totalProducts.length}
                                            </Typography>
                                            <Typography variant="h6" sx={{ mb: 1.5 }} >
                                                Total Products
                                            </Typography>

                                        </CardContent>
                                        <GoWatch style={{ fontSize: 100, color: '#00000026' }} />
                                    </Card>
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Card variant="outlined" style={{ height: 250 }}>
                                        <CardContent>
                                            <Typography style={{ fontSize: 45, fontWeight: 700 }} component="div">
                                                {totalOrders.length}
                                            </Typography>
                                            <Typography variant="h6" sx={{ mb: 1.5 }}>
                                                Total Orders
                                            </Typography>

                                        </CardContent>
                                        <BsMinecartLoaded style={{ fontSize: 100, color: '#00000026' }} />
                                    </Card>
                                </Grid>

                            </Grid>
                        </Container>
                    </>
                }

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