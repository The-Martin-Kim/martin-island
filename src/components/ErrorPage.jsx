import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

function ErrorPage() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(countdown);
            clearTimeout(timer);
        };
    }, [navigate]);

    return (
        <Container style={{ textAlign: 'center', marginTop: '60px' }}>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    404 Not Found
                </Typography>
                <Typography variant="body1">
                    페이지를 찾을 수 없습니다.
                </Typography>
                <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
                    {seconds}초 후에 메인 페이지로 자동 새로고침됩니다.
                </Typography>
            </Box>
        </Container>
    );
}

export default ErrorPage;
