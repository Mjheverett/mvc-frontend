import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bulma/css/bulma.css';
import { Box, Column, Columns, Title } from 'bloomer';

class Blog extends Component {
    state = {
        blog: [],
    }
    
    async componentDidMount() {
        const blogData = await this.loadData();
        this.setState({
            blog: blogData,
        })
    }

    loadData = async () => {
        const response = await fetch(`http://127.0.0.1:3337/blog`);
        const blogData = await response.json();
        return blogData;
    }
    
    render() {
        const { blog } = this.state;

        return (
            <Columns isCentered>
                <Column isSize='3/4'>
                    {!!blog.length ? (
                        <>
                            <Title hasTextAlign='centered'>Quarantine Blog</Title>
                            {
                                blog.map((post) => {
                                    return (
                                        <Box key={post.id}>
                                            <Title isSize={4}><Link to={`/blog/${post.id}`}>{post.title}</Link></Title>
                                            <p>{post.body}</p>
                                        </Box>
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
}

export default Blog;