export function parseFrontMatter(content) {
    const match = content.match(/---\n([\s\S]+?)\n---/);

    if (match) {
        const frontMatter = match[1];
        const metaData = {};

        frontMatter.split('\n').forEach(line => {
            const [key, value] = line.split(':').map(str => str.trim().replace(/^"|"$/g, ''));
            if (key === 'category') {
                metaData[key] = value ? value.split(',').map(cat => cat.trim()) : [];
            } else {
                metaData[key] = value;
            }
        });

        const markdownContent = content.replace(match[0], '').trim();

        return { metaData, markdownContent };
    }

    return { metaData: {}, markdownContent: content };
}
