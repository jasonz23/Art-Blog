import React, {useState, useEffect} from "react";
import {TextField,Button, Typography, Paper, Modal, Box, Grid} from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import {useDispatch} from "react-redux";
import {createPost, updatePost} from "../../actions/posts"
import {useSelector} from "react-redux";

function PostModal(props) {
    const currentId = props.currentId;
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null) );
    //fetch all the posts using redux
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])
    //after the comma is a conditon for the useEffect to be run
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.currentId) {
            dispatch(updatePost(props.currentId, postData));
            clear();
        } else {
            dispatch(createPost(postData));
            clear();
        }

        
    }
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",

    });
    const clear = () => {
        props.setCurrentId(null);
        props.setModal(false);
        setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",

    });

    
    }

    return (
        <Modal
        open = {props.show}
        hideBackdrop
        className  = {classes.modal}
        //onClose = {props.setModal(false)}
        >
            {/* Paper is like a div with white background */}

            
            <form autoComplete="off" noValidate onSubmit = {handleSubmit} >
                <Grid container className = {classes.main} spacing = {1}>

                    <Grid item>
                        <Typography variant = "h6" fullWidth>
                            {props.currentId ? "Editing ": "Creating "}
                            a Post
                        </Typography>    
                    </Grid>
                    <Grid item>
                        <TextField name = "creator" variant = "outlined"label = "Creator" value = {postData.creator}
                        onChange = {(e) => setPostData({... postData, creator: e.target.value})} fullWidth/>
                        {/* ... postData, all the data persists just the creator data changes */}
                    </Grid>
                    <Grid item>
                        <TextField name = "title" variant = "outlined"label = "Title" value = {postData.title}
                        onChange = {(e) => setPostData({... postData, title: e.target.value})} fullWidth/>
                    </Grid>
                    <Grid item>
                        <TextField name = "message" variant = "outlined"label = "Message" value = {postData.message}
                        onChange = {(e) => setPostData({... postData, message: e.target.value})} />
                    </Grid>
                    <Grid item>
                        <TextField name = "tags" variant = "outlined" label = "Tags" value = {postData.tags}
                        onChange = {(e) => setPostData({... postData, tags: e.target.value})} />
                    </Grid>
                    
                    <Grid item>
                        <FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({... postData, selectedFile: base64})} />

                    </Grid>
                    <Grid item>
                        <Button variant = "container" color = "primary" type = "submit" size = "large" fullWidth>
                            Submit
                        </Button>

                        
                    </Grid>
                    <Grid item>
                        <Button variant = "container" color = "secondary"size = "large"  onClick = {clear} fullWidth>
                            Cancel

                        </Button>
                    </Grid>
                    
                </Grid>
            </form>
        </Modal>
    )
}

export default PostModal;