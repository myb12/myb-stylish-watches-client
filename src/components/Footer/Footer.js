import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Footer = () => {
    return (
        <Container style={{}}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <h2>Service</h2>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <h2>Service</h2>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <h2>Service</h2>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <h2>Service</h2>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                        <Link
                            to="/some"
                            style={{
                                display: "block",
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Link
                        </Link>
                    </Grid>
                </Grid>

                <br />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px"
                            }}
                        >
                            <div>ImageLogo</div>
                            <div>name</div>
                        </Box>
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
                                justifyContent: "start"
                            }}
                        >
                            <div>Icon</div>
                            <div>Icon</div>
                            <div>Icon</div>
                            <div>Icon</div>
                            <div>Icon</div>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default Footer;