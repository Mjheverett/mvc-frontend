import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Columns, Column, Title } from 'bloomer';

const Post = props => {
    const [post, setPost] = useState({});
    const { post_id } = useParams();

    useEffect(() => {
        (async function () {
            const response = await fetch(`http://127.0.0.1:3337/blog/${post_id}`);
            const postData = await response.json();
            setPost(postData);
        })();
    }, [setPost, post_id]);

    return (
        <Columns isCentered>
            <Column isSize='3/4'>
                <br />
                <Link to="/">Return to List</Link>
                <Box>
                    <Title isSize={4}>{post.title}</Title>
                    <p>{post.body}</p>
                </Box>
            </Column>
        </Columns>
    )
}

export default Post;