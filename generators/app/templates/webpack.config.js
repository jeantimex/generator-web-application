/* eslint-disable */
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const glob = require('glob');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    output: {
      // Needed for code splitting to work in nested paths
      publicPath: '/',
    },
    resolve: {
      alias: {
        lib: path.resolve(__dirname, 'src/lib/'),
      },
      extensions: ['.js', '.ts'],
    },
  },
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // "error" or false are valid too
      maxEntrypointSize: 150000, // in bytes, default 250k
      maxAssetSize: 450000, // in bytes
    },
  },
  {
    recordsPath: path.join(__dirname, 'records.json'),
    output: {
      chunkFilename: '[name].[chunkhash:4].js',
      filename: '[name].[chunkhash:4].js',
    },
  },
  parts.clean(),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.extractCSS({
    use: ['css-loader', 'sass-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(`${PATHS.app}/**/*.{js,ts}`, { nodir: true }),
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:4].[ext]',
    },
  }),
  {
    optimization: {
      runtimeChunk: {
        name: 'manifest',
      },
    },
  },
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.generateSourceMaps({ type: 'source-map' }),
]);

module.exports = mode => {
  const pages = [];

  // Index page.
  const indexPage = {
    title: 'App',
    entry: {
      app: PATHS.app,
    },
    chunks: ['manifest', 'app', 'vendors~app'],
  };

  const indexPageTemplate = path.resolve(__dirname, 'src/index.html');
  if (fs.existsSync(indexPageTemplate)) {
    indexPage.template = indexPageTemplate;
  }

  pages.push(parts.page(indexPage));

  // Other pages.
  const pagesDirectory = path.join(__dirname, 'src/pages');
  fs.readdirSync(pagesDirectory)
    .filter(filename => filename.match(/\.(js|ts)$/))
    .forEach(filename => {
      const pageName = path.parse(filename).name;
      const pageTitle = pageName.replace(/^\w/, c => c.toUpperCase());
      const pagePath = 'pages';

      // Create the page chunk.
      const page = {
        name: pageName,
        title: pageTitle,
        path: pagePath,
        entry: {
          [pageName]: path.join(PATHS.app, pagePath, filename),
        },
        chunks: ['manifest', pageName, 'vendors~app'],
      };

      // Use page html template if it exists.
      const pageTemplate = path.resolve(pagesDirectory, pageName + '.html');
      if (fs.existsSync(pageTemplate)) {
        page.template = pageTemplate;
      }

      pages.push(parts.page(page));
    });

  const config = mode === 'production' ? productionConfig : developmentConfig;

  return merge([commonConfig, config, { mode }].concat(pages));
};
