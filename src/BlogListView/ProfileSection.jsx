import React from 'react';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';
import CategoryFilter from './CategoryFilter';

function ProfileSection({ categories, selectedCategory, handleCategoryClick }) {
    return (
        <Grid item xs={12} sm={3}>
            <ProfileCard />
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
            />
        </Grid>
    );
}

export default ProfileSection;
