import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const PostCard = ({post}) => (
    <Card
        sx={{
            transition: '0.3s',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            overflow: 'hidden',
            '&:hover': {
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(-5px)',
            },
        }}
    >
        <CardActionArea component={Link} to={`/post/${post.slug}`}>
            <CardMedia
                component="img"
                image={post.image || 'https://via.placeholder.com/350x140'}
                alt={post.title}
                style={{width: '100%', height: '140px', objectFit: 'cover'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center" style={{
                    fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                }}>
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    INE.TODAY on {post.date || 'Unknown'}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
);

export default PostCard;
