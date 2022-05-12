import React, {useState, useEffect} from "react";
import {AppBar, Button, Container, Grid, Toolbar, Typography, Grow} from "@material-ui/core"
import useStyles from "./styles"
import Header from "./components/Header/Header"
function App() {
    const classes = useStyles();
    return (
        <Container className = {classes.root}>
            <Header />
            <Grow in>
                <Container>
                    <Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;