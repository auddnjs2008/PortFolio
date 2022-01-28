import path from "path";

import webpack, { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";

const isDevelopment = process.env.NODE_ENV !== "production";

const config: Configuration = {
  name: "PORTFOLIO",
  mode: isDevelopment ? "development" : "production",
  entry: "./client.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@typings": path.resolve(__dirname, "src/typings"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: isDevelopment,
              },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          env: {
            development: {
              plugins: [
                ["@emotion/babel-plugin", { sourceMap: true }],
                require.resolve("react-refresh/babel"),
              ],
            },
            production: {
              plugins: ["@emotion/babel-plugin"],
            },
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDevelopment ? "development" : "production",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new Dotenv(),
  ],
  target: ["web", "es5"],
  devServer: {
    historyApiFallback: true,
    port: 3098,
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(
    new ReactRefreshWebpackPlugin({ overlay: { useURLPolyfill: true } })
  );
}

export default config;
