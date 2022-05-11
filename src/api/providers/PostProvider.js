import {useEffect, useState} from "react";
import api from "../index";
import PostList from "../../components/PostList";


function PostProvider() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        api.post.all()
            .then(result => setPosts(result.data))
            .finally(() => setIsLoading(true))
        }, []);

    return (
        <>
            {isLoading ? <PostList posts={posts}/> : 'Loading content...'}
        </>
    )
}

export default PostProvider;