import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Container, CardActionArea, CardMedia, Button, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const requireMarkdown = require.context('../posts', false, /\.md$/);

function parseFrontMatter(content) {
    const match = content.match(/---\n([\s\S]+?)\n---/);
    if (match) {
        const frontMatter = match[1];
        const metaData = {};
        frontMatter.split('\n').forEach(line => {
            const [key, value] = line.split(':').map(str => str.trim().replace(/^"|"$/g, ''));
            metaData[key] = value;
        });
        const markdownContent = content.replace(match[0], '').trim();
        return { metaData, markdownContent };
    }
    return { metaData: {}, markdownContent: content };
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // 날짜 부분만 반환
}

function BlogList() {
    const [postInfo, setPostInfo] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    useEffect(() => {
        const fetchPostInfo = async () => {
            const posts = requireMarkdown.keys().map((file) => {
                const slug = file.replace('./', '').replace('.md', '');
                return { title: slug.replace('-', ' '), slug, file };
            });

            const postDetails = await Promise.all(
                posts.map(async (post) => {
                    const response = await fetch(requireMarkdown(post.file));
                    const text = await response.text();
                    const { metaData } = parseFrontMatter(text);
                    return { ...post, ...metaData };
                })
            );

            postDetails.sort((a, b) => (b.id || 0) - (a.id || 0));

            setPostInfo(postDetails);
        };

        fetchPostInfo();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postInfo.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(postInfo.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container style={{ padding: '20px 0' }}>
            <Typography variant="h4" component="h2" gutterBottom align="center" style={{ marginTop: '10px', marginBottom: '20px' }}>
                INE.TODAY, 작지만 소중한 오늘.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {currentPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.slug}>
                        <Card
                            sx={{
                                transition: '0.3s',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                '&:hover': {
                                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                                    transform: 'translateY(-5px)'
                                }
                            }}
                        >
                            <CardActionArea component={Link} to={`/post/${post.slug}`}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.image || 'https://via.placeholder.com/350x140'}
                                    alt={post.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" align="center" style={{ fontWeight: 700 }}>
                                        {post.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" align="center">
                                        Written by {post.author || 'INE.TODAY'} on {formatDate(post.date)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box display="flex" justifyContent="center" marginTop={4}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button
                        key={index + 1}
                        variant={index + 1 === currentPage ? 'contained' : 'outlined'}
                        onClick={() => handlePageChange(index + 1)}
                        style={{ margin: '0 5px' }}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Box>
        </Container>
    );
}

export default BlogList;
