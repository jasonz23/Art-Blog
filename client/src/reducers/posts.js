export default (posts = [],action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [... posts, action.payload];
            //new post is stored in the action.payload
        case "UPDATE":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            //what is the output for a map? 
            // an array
            //action.payload is the updated post
        case "DELETE":
            return posts.filter((post) => post._id !== action.payload ? action.payload : post);
        case "LIKE":
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        
        default:
            return posts;
    }
}