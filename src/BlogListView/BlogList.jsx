import React, {useState} from 'react';
import { Container, Grid } from '@mui/material';
import { usePosts } from '../hooks/usePosts';
import Pagination from './Pagination';
import { useMediaQuery, useTheme } from '@mui/material';
import {usePagination} from "../hooks/usePagination";
import ProfileSection from "./ProfileSection";
import PostList from "./PostList";

function BlogList() {
    const { postInfo, categories } = usePosts();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const filteredPosts = selectedCategory
        ? postInfo.filter((post) => post.category && post.category.includes(selectedCategory))
        : postInfo;

    const postsPerPage = 9;
    const { currentData: currentPosts, totalPages, currentPage, handlePageChange } = usePagination(filteredPosts, postsPerPage);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
        handlePageChange(1);
    };

    return (
        <Container style={{ padding: '20px 0' }}>

            <Grid container spacing={4}>
                {!isMobile && (
                    <ProfileSection
                        categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategoryClick={handleCategoryClick}
                    />
                )}

                <Grid item xs={12} sm={9}>
                    <PostList posts={currentPosts}/>

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
