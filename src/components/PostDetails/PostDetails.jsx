import React from 'react';
import { useParams } from 'react-router';


const PostDetails = () => {
    const postId = useParams();

    return (
        <div className='mt-52'>
            <h1>Post Details for ID: {postId.postId}</h1>
        </div>
    );
};

export default PostDetails;