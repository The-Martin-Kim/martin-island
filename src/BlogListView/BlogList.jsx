import React, { useState } from 'react';
import { Typography, Container, Grid} from '@mui/material';
import ProfileCard from './ProfileCard';
import {usePosts} from "../hooks/usePosts";
import CategoryFilter from "./CategoryFilter";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

function BlogList() {
    const { postInfo, categories } = usePosts();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const filteredPosts = selectedCategory
        ? postInfo.filter((post) => post.category && post.category.includes(selectedCategory))
        : postInfo;

    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
        setCurrentPage(1);
    };

    return (
        <Container style={{ padding: '20px 0' }}>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
                style={{ marginTop: '10px', marginBottom: '30px' }}
            >
                작지만 소중한 오늘.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} sm={3}>
                    <ProfileCard />

                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategoryClick={handleCategoryClick}
                    />
                </Grid>

                <Grid item xs={12} sm={9}>
                    <Grid container spacing={4}>
                        {currentPosts.map((post) => (
                            <Grid item xs={12} sm={6} md={4} key={post.slug}>
                                <PostCard post={post} />
                            </Grid>
                        ))}
                    </Grid>

                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default BlogList;