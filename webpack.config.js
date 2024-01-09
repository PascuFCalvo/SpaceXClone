module.exports = {
  // other webpack configurations...

  module: {
    rules: [
      // other rules...

      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "videos/", // or the desired output path
            },
          },
        ],
      },
    ],
  },
};
