import React from "react";
import Post from "./Post/Post.js"
import {useSelector} from "react-redux";
import {Grid, CircularProgress} from "@material-ui/core";
import useStyles from "./styles.js"
function Posts(props) {
    const classes  = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    if (posts.length == 0) {
        return (
            <CircularProgress />
        )
    } else {
        return (
            <Grid container alignItems = "stretch" spacing = {3} className = {classes.root}>

                {
                    posts.map((post) => (
                        <Grid key = {post.id} item xs = {12} sm  ={6}>
                            <Post post = {post} setCurrentId = {props.setCurrentId} setModal = {props.setModal}/>
                            {/* props drilling sending the props down the heirarchy */}
                        </Grid>
                    ))
                }
            </Grid>
        )
    }
}

export default Posts;