const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  baseUrl: '/next100',
  outputDir: '../../public/next100',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/transcript': {
        target: process.env.VUE_APP_API_BASE_URL
      },
      '/console/config': {
        target: process.env.VUE_APP_API_BASE_URL
      }
    }
  },
  // assetsDir: 'static',
  // configureWebpack: {
  //   plugins: [
  //     new ManifestPlugin()
  //   ]
  // },
  // pages: {
  //     index: {
  //         // entry for the page
  //         entry: 'src/main.js',
  //         // the source template
  //         template: 'public/index.html',
  //         // output as dist/index.html
  //         filename: 'index.html',
  //         // when using title option,
  //         // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
  //         title: 'Index Page',
  //         // chunks to include on this page, by default includes
  //         // extracted common chunks and vendor chunks.
  //         chunks: ['chunk-vendors', 'chunk-common', 'index']
  //     },
  //     // when using the entry-only string format,
  //     // template is inferred to be `public/subpage.html`
  //     // and falls back to `public/index.html` if not found.
  //     // Output filename is inferred to be `subpage.html`.
  //     // subpage: 'src/subpage/main.js'
  // }
}
