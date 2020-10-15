import React, { useEffect, useState } from 'react';
import Post from './Post';

import 'bulma/css/bulma.css';
import { Column, Columns, Title } from 'bloomer';

const Blog = props => {
    const [blog, setBlog] = useState([]);
    
    useEffect(() => {
        (async function () {
            const response = await fetch(`http://127.0.0.1:3337/blog`);
            const blogData = await response.json();
            console.log("blogdata", blogData);
            setBlog(blogData);
        })();
    }, [setBlog]);
    
    return (
        <Columns isCentered>
            <Column isSize='3/4'>
                {!!blog.length ? (
                    <>
                        <Title hasTextAlign='centered'>Quarantine Blog</Title>
                        {
                            blog.map((post) => {
                                return (
                                    <Post post={post} key={post.id} />
                                )
                            })
                        }
                    </>
                ) : (
                    <p>No blog posts yet!</p>
                )}
            </Column>
        </Columns>
    )
}

export default Blog;