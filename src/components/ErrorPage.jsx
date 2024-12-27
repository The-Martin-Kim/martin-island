import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
        <Container style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
            <Box>
                <DotLottieReact
                    src="https://lottie.host/3d5e3c28-e292-4519-991f-58453e9b5534/fBeplJ3o2P.lottie"
                    loop
                    autoplay
                />
                <Typography variant="h4" component="h2" gutterBottom>
                    404 Not Found
                </Typography>
                <Typography variant="body1">
                    상어가 페이지를 먹어버렸나봐요.
                </Typography>
                <Typography variant="body1" color="error" style={{ marginTop: '20px' }}>
                    {seconds}초 후에 구조대가 도착합니다.
                </Typography>
            </Box>
        </Container>
    );
}

export default ErrorPage;
