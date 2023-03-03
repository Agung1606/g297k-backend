import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    postDate: Date,
    postPicturePath: String,
    userProfilePicturePath: String,
    description: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comments:  {
        type: Map, 
        of: Array
    },
}, {timestamps: true});


const Post = mongoose.model("Post", PostSchema);
export default Post;