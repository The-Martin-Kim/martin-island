/* eslint-disable jsx-a11y/heading-has-content */

import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';  // C++ 하이라이팅 모듈


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
    //code: (props) => <code style={{ fontFamily: 'jetbrains-mono-regular, sans-serif', fontSize: '1.1em' }} {...props} />,
    code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
            <pre className={`language-${match[1]}`} style={{ ...commonStyle }}>
                <code className={`language-${match[1]}`} {...props}>
                    {children}
                </code>
            </pre>
        ) : (
            <code style={{ fontFamily: 'jetbrains-mono-regular, sans-serif', fontSize: '1.1em' }} {...props}>
                {children}
            </code>
        );
    },
    pre: (props) => <pre style={commonStyle} {...props} />,
    strong: (props) => <strong style={commonStyle} {...props} />,
    em: (props) => <em style={commonStyle} {...props} />,
};

const MarkdownRenderer = ({ content }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, [content]);

    return (
        <ReactMarkdown
            remarkPlugins={[gfm]}
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
