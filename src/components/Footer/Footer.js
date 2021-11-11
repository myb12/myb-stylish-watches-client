import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const useStyles = makeStyles({
    footerLink: {
        color: "#000",
        paddingTop: 5,
        paddingBottom: 5,
        "&:hover": {
            color: "#c39052"
        }
    },
    socialIcons: {
        fontSize: 20,
        padding: 10,
        border: "1px solid",
        borderRadius: 6,
        transition: "all 0.3s ease-in-out"
    },
    facebookIcons: {
        color: "#3C5A96",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#3C5A96"
        }
    },
    twitterIcons: {
        color: "#2AA3EF",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#2AA3EF"
        }
    },
    linkedInIcons: {
        color: "#1178B3",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#1178B3"
        }
    },
    githubIcons: {
        color: "#24292f",
        "&:hover": {
            color: "#fff",
            backgroundColor: "#24292f"
        }
    }
});
const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{ marginTop: 100,}}>
            <Divider />
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: '50px 0'  }}>
                <Grid container spacing={1}>
                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h6"
                            style={{ paddingTop: 5, paddingBottom: 5, fontWeight: 700 }}
                        >
                            Services
                        </Typography>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Pricing
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Award
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Services
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
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
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Mission
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                About Us
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Why Choose Us
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
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
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Contacts
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Blog
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                F.A.Q
                            </Typography>
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            <Typography variant="subtitle1" className={classes.footerLink}>
                                Get a Quote
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={3}>
                        <Typography
                            variant="h5"
                            style={{
                                paddingTop: 5,
                                paddingBottom: 5,
                                fontWeight: 700,
                                color: "#c39052"
                            }}
                        >
                            Company Name
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            style={{ paddingTop: 5, paddingBottom: 5 }}
                        >
                            This is a demo text about the company. This text will be replaced
                            by a short description aout the company and it's services.
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
                                justifyContent: "center"
                            }}
                        >
                            <img
                                src="https://myb-travel.web.app/static/media/myb.50bd4b73.svg"
                                width="50" alt=""
                            />
                            <Typography
                                variant="h5"
                                style={{ paddingLeft: 10, color: "#c39052" }}
                            >
                                Company Name
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
                                className={`${classes.socialIcons} ${classes.facebookIcons}`}
                            />
                            <FaTwitter
                                className={`${classes.socialIcons} ${classes.twitterIcons}`}
                            />
                            <FaLinkedinIn
                                className={`${classes.socialIcons} ${classes.linkedInIcons}`}
                            />
                            <FaGithub
                                className={`${classes.socialIcons} ${classes.githubIcons}`}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
