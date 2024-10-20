import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    
    useEffect(() => {
        getPosts().then(data => setPosts(data));
    }, [])

    return (
        <div>
            {
                posts.map((item: IPost) => (<Post item={item} key={item.id}/>))
            }

        </div>
    );
};

export default Posts;