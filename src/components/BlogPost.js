import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Typography, Divider } from '@mui/material';

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
    return date.toISOString().split('T')[0];
}

function BlogPost() {
    const { slug } = useParams();
    const post = requireMarkdown.keys().find((file) => file === `./${slug}.md`);
    const [content, setContent] = useState('');
    const [metaData, setMetaData] = useState({});

    useEffect(() => {
        if (post) {
            fetch(requireMarkdown(post))
                .then((res) => res.text())
                .then((text) => {
                    const { metaData, markdownContent } = parseFrontMatter(text);
                    setMetaData(metaData);
                    setContent(markdownContent);
                });
        }
    }, [post]);

    if (!post) {
        return (
            <Container style={{ marginTop: '60px' }}>
                <Typography variant="h4" component="h2">
                    Post not found
                </Typography>
            </Container>
        );
    }

    return (
        <Container style={{ marginTop: '60px' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {metaData.title || slug.replace('-', ' ')}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Written by INE.TODAY on {formatDate(metaData.date)}
            </Typography>

            <Divider style={{ marginBottom: '20px', marginTop: '10px' }} />

            <ReactMarkdown>{content}</ReactMarkdown>
        </Container>
    );
}

export default BlogPost;
