import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../images/myb.svg';
import './Footer.css'


const Footer = () => {

    return (
        <div style={{ marginTop: 100, }}>
            <Divider />
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: '50px 20px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h6"
                            style={{ paddingTop: 5, paddingBottom: 5, fontWeight: 700 }}
                        >
                            Services
                        </Typography>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Pricing
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Award
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Services
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Testimonials
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h6"
                            style={{ paddingTop: 5, paddingBottom: 5, fontWeight: 700 }}
                        >
                            Company
                        </Typography>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Mission
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                About Us
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Why Choose Us
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Team
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h6"
                            style={{ paddingTop: 5, paddingBottom: 5, fontWeight: 700 }}
                        >
                            Resources
                        </Typography>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Contacts
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Blog
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                F.A.Q
                            </Typography>
                        </Link>
                        <Link
                            to="/"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className="footer-link">
                                Get a Quote
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h6"
                            style={{
                                paddingTop: 5,
                                paddingBottom: 5,
                                fontWeight: 700,
                                color: "#c39052"
                            }}
                        >
                            MYB Stylish Watches
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            style={{ paddingTop: 5, paddingBottom: 5 }}
                        >
                            The MYB Watches is global. MYB provides easy, safe, and reliable market access to all watch enthusiasts.
                        </Typography>
                    </Grid>
                </Grid>

                <br />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: 14
                            }}
                        >
                            <img
                                src={logo}
                                width="50" alt=""
                            />
                            <Typography
                                variant="h5"
                                style={{ paddingLeft: 10, color: "#c39052" }}
                            >
                                MYB Stylish Watches
                            </Typography>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={3}
                        style={{ marginLeft: "auto" }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                                justifyContent: "center"
                            }}
                        >
                            <FaFacebookF
                                className="social-icons facebook-icons"
                            />
                            <FaTwitter
                                className="social-icons twitter-icons"
                            />
                            <FaLinkedinIn
                                className="social-icons linkedIn-icons"
                            />
                            <FaYoutube
                                className="social-icons youtube-icons"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
