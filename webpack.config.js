module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader']
      }
    ]
  }
}