import { useState, useEffect } from 'react';
import { parseFrontMatter } from '../components/parseFrontMatter';

const requireMarkdown = require.context('../posts', false, /\.md$/);

export const useSinglePost = (slug) => {
    const [content, setContent] = useState('');
    const [metaData, setMetaData] = useState({});
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const file = requireMarkdown.keys().find((file) => file === `./${slug}.md`);
        setPost(file);

        if (file) {
            fetch(requireMarkdown(file))
                .then((res) => res.text())
                .then((text) => {
                    const { metaData, markdownContent } = parseFrontMatter(text);
                    setMetaData(metaData);
                    setContent(markdownContent);
                })
                .catch((error) => {
                    console.error('Failed to load markdown file:', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [slug]);

    return { post, content, metaData, isLoading };
};
