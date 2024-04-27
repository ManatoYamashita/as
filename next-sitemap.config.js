module.exports = {
    siteUrl: "https://www.amausyrup.net",
    sitemapBaseName: "amausyrup.xml",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    outDir: './public',
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://www.amausyrup.net/amausyrup.xml",
        ],
    }
  };