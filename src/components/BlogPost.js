/* eslint-disable jsx-a11y/heading-has-content */

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import {Container, Typography, Divider} from '@mui/material';

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
        return {metaData, markdownContent};
    }
    return {metaData: {}, markdownContent: content};
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}

function BlogPost() {
    const {slug} = useParams();
    const post = requireMarkdown.keys().find((file) => file === `./${slug}.md`);
    const [content, setContent] = useState('');
    const [metaData, setMetaData] = useState({});

    useEffect(() => {
        if (post) {
            fetch(requireMarkdown(post))
                .then((res) => res.text())
                .then((text) => {
                    const {metaData, markdownContent} = parseFrontMatter(text);
                    setMetaData(metaData);
                    setContent(markdownContent);
                });
        }
    }, [post]);

    if (!post) {
        return (
            <Container style={{marginTop: '60px'}}>
                <Typography variant="h4" component="h2">
                    Post not found
                </Typography>
            </Container>
        );
    }

    return (
        <Container style={{marginTop: '60px', marginBottom: '30px'}}>
            <Typography variant="h4" component="h2" gutterBottom>
                {metaData.title || slug.replace('-', ' ')}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Written by INE.TODAY on {formatDate(metaData.date)}
            </Typography>

            <Divider style={{marginBottom: '20px', marginTop: '10px'}}/>


            <ReactMarkdown
                remarkPlugins={[gfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    img: ({node, ...props}) => (
                        <img style={{maxWidth: '100%'}} {...props} alt=""/>
                    ),
                    p: ({node, ...props}) => <p style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h1: ({node, ...props}) => <h1 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h2: ({node, ...props}) => <h2 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h3: ({node, ...props}) => <h3 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h4: ({node, ...props}) => <h4 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h5: ({node, ...props}) => <h5 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    h6: ({node, ...props}) => <h6 style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    ul: ({node, ...props}) => <ul style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    ol: ({node, ...props}) => <ol style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    li: ({node, ...props}) => <li style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    blockquote: ({node, ...props}) => <blockquote
                        style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    code: ({node, ...props}) => <code
                        style={{fontFamily: 'jetbrains-mono-regular, sans-serif'}} {...props} />,
                    pre: ({node, ...props}) => <pre
                        style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    strong: ({node, ...props}) => <strong
                        style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                    em: ({node, ...props}) => <em style={{fontFamily: 'GowunDodum-Regular, sans-serif'}} {...props} />,
                }}
            >
                {content}
            </ReactMarkdown>

        </Container>
    );
}

export default BlogPost;
