import { useState } from 'react';

export const usePagination = (data, postsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentData = data.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(data.length / postsPerPage);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return { currentData, totalPages, currentPage, handlePageChange };
};
