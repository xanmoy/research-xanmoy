module.exports = {
    siteUrl: 'https://xanmoy.in',
    generateRobotsTxt: true, // Optional: generate robots.txt
    sitemapSize: 5000, // optional, default is 5000
    changefreq: 'daily', // optional
    priority: 0.7, // optional
    additionalPaths: async () => {
        return [
            '/terminal',
            '/contact',
            '/blog',
            '/research',
            '/about',
        ].map((path) => ({
            loc: path,
            lastmod: new Date().toISOString(),
        }));
    },
};
