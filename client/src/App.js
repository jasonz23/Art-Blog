import React, {useState, useEffect} from "react";
import {AppBar, Button, Container, Grid, Toolbar, Typography, Grow, Modal} from "@material-ui/core"
import useStyles from "./styles"
import Header from "./components/Header/Header"
import PostModal from "./components/PostModal/PostModal"
import {getPosts} from "./actions/posts";
import { useDispatch } from "react-redux";
import Posts from "./components/Posts/Posts"
function App() {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container className = {classes.root}>
            <Header setModal = {setModal}/>
            <PostModal show = {modal} setModal = {setModal} currentId = {currentId} setCurrentId = {setCurrentId} />
            
            <Grid container className = {classes.grid}>
                <Typography variant = "h2" >
                    Posts
                </Typography>
                <Grow in>

                    <Grid container className = {classes.grid}>
                        <Posts setCurrentId = {setCurrentId} setModal = {setModal}/>
                    </Grid>

            </Grow>
            </Grid>
            
            
            
        </Container>
        
    )
}

export default App;