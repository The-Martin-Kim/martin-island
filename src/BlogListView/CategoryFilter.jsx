import React from 'react';
import { Button, Box } from '@mui/material';

const CategoryFilter = ({ categories, selectedCategory, handleCategoryClick }) => {
    const sortedCategories = Object.keys(categories).sort((a, b) => {
        const countDiff = categories[b] - categories[a];
        if (countDiff !== 0) return countDiff;
        return a.localeCompare(b);
    });

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start">
            {sortedCategories.map((category) => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? 'contained' : 'outlined'}
                    onClick={() => handleCategoryClick(category)}
                    style={{ marginBottom: '10px', width: '100%' }}
                >
                    {category} ({categories[category]})
                </Button>
            ))}
        </Box>
    );
};

export default CategoryFilter;
