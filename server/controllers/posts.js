import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {

    try {

        const postMessages = await PostMessage.find();
        //finding something in a modal takes time so it is async
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});

    }
    
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(201).json(newPost);
        //201 means successfull creation
    } catch(error) {
        res.status(409).json({message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    //How to we know we are going to recieve?
    // posts/id
    const post = req.body;
    //post is a {title, message, creator, etc}
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("no post with that id");

    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true} );
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id } = req.params;
    //get id from request . params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("no post with that id");

    }
    console.log("delete");

    await PostMessage.findByIdAndRemove(id);
    res.json({message: "Post deleted successfully"});
}

export const likePost = async(req,res) => {
    const {id } = req.params;
    //get id from request . params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("no post with that id");

    }

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1},{new: true});
    res.json(updatedPost);
}