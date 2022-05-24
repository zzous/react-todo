const CracoAlias = require('craco-alias');

module.exports = {
  devServer: {
    compress: true,
    port: 8080,
    open: false,
    historyApiFallback: true
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: '.'
      }
    }
  ]
};
