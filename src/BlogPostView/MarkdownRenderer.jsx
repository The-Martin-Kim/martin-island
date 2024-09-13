/* eslint-disable jsx-a11y/heading-has-content */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';

const commonStyle = { fontFamily: 'GowunDodum-Regular, sans-serif' };

const markdownComponents = {
    img: ({ node, ...props }) => <img style={{ maxWidth: '100%' }} {...props} alt="" />,
    p: (props) => <p style={commonStyle} {...props} />,
    h1: (props) => <h1 style={commonStyle} {...props} />,
    h2: (props) => <h2 style={commonStyle} {...props} />,
    h3: (props) => <h3 style={commonStyle} {...props} />,
    h4: (props) => <h4 style={commonStyle} {...props} />,
    h5: (props) => <h5 style={commonStyle} {...props} />,
    h6: (props) => <h6 style={commonStyle} {...props} />,
    ul: (props) => <ul style={commonStyle} {...props} />,
    ol: (props) => <ol style={commonStyle} {...props} />,
    li: (props) => <li style={commonStyle} {...props} />,
    blockquote: (props) => <blockquote style={commonStyle} {...props} />,
    code: (props) => <code style={{ fontFamily: 'jetbrains-mono-regular, sans-serif' }} {...props} />,
    pre: (props) => <pre style={commonStyle} {...props} />,
    strong: (props) => <strong style={commonStyle} {...props} />,
    em: (props) => <em style={commonStyle} {...props} />,
};

const MarkdownRenderer = ({ content }) => (
    <ReactMarkdown
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
    >
        {content}
    </ReactMarkdown>
);

export default MarkdownRenderer;
