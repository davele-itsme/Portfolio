const {
  author,
  siteDescription,
  siteIcon,
  siteTitle,
  siteUrl,
} = require(`./config`);

module.exports = {
  siteMetadata: {
    author,
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        headers: {
          "/**/*.html": ["cache-control: public, max-age=0, must-revalidate"],
          "/page-data/*.json": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/app-data.json": [
            "cache-control: public, max-age=0, must-revalidate",
          ],
          "/static/*": ["cache-control: public,max-age=31536000,immutable"],
          "/public/*": ["cache-control: public, max-age=31536000, immutable"],
          "/**/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/**/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/*.png": ["cache-control: public, max-age=31536000, immutable"],
          "/moon.png": ["cache-control: public, max-age=31536000, immutable"],
          "/moon-ring.png": [
            "cache-control: public, max-age=31536000, immutable",
          ],
          "/clouds.png": ["cache-control: public, max-age=31536000, immutable"],
          "/stars.png": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, age=0, must-revalidate"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: author,
        short_name: author,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: siteIcon,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
      },
    },
  ],
};
