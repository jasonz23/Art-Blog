import React, {useState, useEffect} from "react";
import {AppBar, Button, Container, Toolbar, Typography} from "@material-ui/core"
import useStyles from "./styles"
function App() {
    const classes = useStyles();
    return (
        <Container className = {classes.root}>
            <AppBar className = {classes.appbar} elevation = {0}>
                <Toolbar className = {classes.appbarWrapper}>
                    <Typography variant = "h2" className = {classes.title}>Art</Typography>
                    <Button variant = "outlined" className  = {classes.button}>
                        Add Post
                    </Button>
                </Toolbar>
                
            </AppBar>
            
        </Container>
    )
}

export default App;