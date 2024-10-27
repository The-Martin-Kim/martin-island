import React from 'react';
import { Grid } from '@mui/material';
import ProfileCard from './ProfileCard';
import CategoryFilter from './CategoryFilter';
import Clock from "react-live-clock";

function ProfileSection({ categories, selectedCategory, handleCategoryClick }) {
    return (
        <Grid item xs={12} sm={3}>
            <ProfileCard/>
            <h1 style={{textAlign: "center", paddingBottom: "10px"}}>
                <Clock format="h:mm:ss a" interval={1000} ticking={true}/>
            </h1>
            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
            />
        </Grid>
    );
}

export default ProfileSection;
