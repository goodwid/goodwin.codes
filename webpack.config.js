/* eslint-env node */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = (env, argv) => {
  const { app, cordova } = env;
  let prod = argv.mode === 'production';
  const packageRoot = path.resolve(__dirname, `packages/${app}`);
  const buildPath = `${packageRoot}/build`;

  const config = {
    entry: `./packages/${app}/src/index.js`,
    output: {
      filename: '[name].[hash].js',
      publicPath: cordova ? './' : '/',
      path: buildPath,
    },
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      stats: 'minimal',
    },
    devtool: prod ? 'cheap-source-map' : 'inline-source-map',
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlPlugin({
        template: `./packages/${app}/src/index.html`,
        // favicon: './packages/shared/assets/favicon.ico',
      }),
    ],
    resolve: {
      extensions: ['.esm.js', '.js'],
      symlinks: true,
      alias: {
        components: `${packageRoot}/src/components`,
        services: `${packageRoot}/src/services`,
        styles: `${packageRoot}/src/styles`,
        routes: `${packageRoot}/src/routes`,
        hooks: `${packageRoot}/src/hooks`,
        packageRoot,
        assets: path.resolve(__dirname, 'packages/shared/assets'),
        shared: path.resolve(__dirname, 'packages/shared/src'),
        root: __dirname,
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader?cacheDirectory',
          include: [
            path.resolve(__dirname, `./packages/${app}/src`),
            path.resolve(__dirname, './packages/shared'),
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
              options: { },
            },
            {
              loader: 'css-loader',
              options: {
                modules: 'global',
                sourceMap: true,
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: {  },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
              },
            },
          ],
        },
        {
          test: /\.(pdf|jpg|png|gif|ico)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 5000 },
          },
        },
        {
          test: /\.svg$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {

          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  };

  return config;
};
