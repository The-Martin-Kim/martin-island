import React from 'react';
import { Card, CardContent, Typography, Box, IconButton, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfileCard = () => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 3, textAlign: 'center', padding: 2 }}>
            <Avatar
                alt="Profile Image"
                src="/profile.jpeg"
                sx={{ width: 150, height: 150, margin: '0 auto', marginBottom: 2 }}
            />

            <CardContent>
                <Typography variant="h6" component="div">
                    Martin Kim
                </Typography>

                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    개발자 특: 이런 프사 씀
                </Typography>

                <Box display="flex" justifyContent="center" marginTop={2}>
                    <IconButton
                        component="a"
                        href="https://github.com/The-Martin-Kim"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://instagram.com/kim_1back"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <InstagramIcon />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://linkedin.com/in/kim1back"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </IconButton>

                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;
