import React from 'react';
import { Card, CardContent, Typography, Box, IconButton, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ProfileCard = () => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: 2, textAlign: 'center', padding: 2 }}>
            <Avatar
                alt="Profile Image"
                src="/logo.png"
                sx={{ width: 150, height: 150, margin: '0 auto', marginBottom: 2 }}
            />

            <CardContent>
                <Typography variant="h6" component="div">
                    Martin Kim
                </Typography>

                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    Finance AI 분야의 석사 과정을 이수 중에 있습니다.(본 전공 - 인공지능/소프트웨어). 프로그래밍/IT 대회/대입·영재원 면접/디지털새싹 소속 강사로 활동하고 있습니다.
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
