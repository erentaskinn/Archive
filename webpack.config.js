const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./src/js/index.js",
    about: "./src/js/about.js",
    contact: "./src/js/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  resolve: {
    alias: {
      "@scss": path.resolve(__dirname, "src/scss/"),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html", // Ana sayfa için HTML dosyası
      filename: "index.html",
      chunks: ["index"], // Hangi giriş noktası için HTML oluşturulacak
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about.html", // "About" sayfası için HTML dosyası
      filename: "about/index.html",
      chunks: ["about"], // Hangi giriş noktası için HTML oluşturulacak
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.html", // "Contact" sayfası için HTML dosyası
      filename: "contact/index.html",
      chunks: ["contact"], // Hangi giriş noktası için HTML oluşturulacak
    }),
    new MiniCssExtractPlugin({
      filename: "[name]/style.css",
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
    compress: true,
    liveReload: true,
    hot: true,
    port: 9000,
  },
};
