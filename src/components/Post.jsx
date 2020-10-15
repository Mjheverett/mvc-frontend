import React from 'react'

import 'bulma/css/bulma.css';
import { Box, Title } from 'bloomer';

const Post = props => {
    const { post } = props;

    return (
        <>
            <Box>
                <Title isSize={4}>{post.title}</Title>
                <p>{post.body}</p>
            </Box>
        </>
    )
}

export default Post;