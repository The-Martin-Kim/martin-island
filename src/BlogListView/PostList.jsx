import React from 'react';
import { Grid } from '@mui/material';
import PostCard from './PostCard';

function PostList({ posts }) {
    return (
        <Grid container spacing={4}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.slug}>
                    <PostCard post={post} />
                </Grid>
            ))}
        </Grid>
    );
}

export default PostList;
