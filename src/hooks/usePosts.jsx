import { useState, useEffect } from 'react';
import { parseFrontMatter } from '../components/parseFrontMatter';

const requireMarkdown = require.context('../posts', false, /\.md$/);

export const usePosts = () => {
    const [postInfo, setPostInfo] = useState([]);
    const [categories, setCategories] = useState({});

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

            const categoryCount = {};
            postDetails.forEach((post) => {
                if (Array.isArray(post.category)) {
                    post.category.forEach((cat) => {
                        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
                    });
                }
            });

            setPostInfo(postDetails);
            setCategories(categoryCount);
        };

        fetchPostInfo();
    }, []);

    return { postInfo, categories };
};