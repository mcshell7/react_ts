import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type PostProps = {
    item: IPost;
}

const Post: FC<PostProps> = ({item}) => {
    return (
        <div>
            <p>
                {item.id}.{item.title}.<b> views: {item.views}</b>
            </p>
        </div>
    );
};

export default Post;