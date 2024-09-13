import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Box } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CustomButtons = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 5 }}>
            <Stack direction="row" spacing={2}>
                <Button
                    variant="outlined"
                    startIcon={<ListIcon />}
                    onClick={handleBackClick}
                >
                    목록으로
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<ArrowUpwardIcon />}
                    onClick={scrollToTop}
                >
                    맨 위로
                </Button>
            </Stack>
        </Box>
    );
};

export default CustomButtons;