module.exports = {
    //lintOnSave: false,
    chainWebpack: config => {
      config.module
      .rule('js')
      .use('babel-loader')
      .options({exclude: /node_modules[\\\/]@webarkit\/ar-nft/})
    },
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.ts',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        title: 'Visual AR Poetry - Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      visual: {
          entry: 'src/pages/visual.ts',
          template: 'public/visual.html',
          filename: 'visual.html',
          title: 'Visual AR Poetry - Visual',
          chunks: [ 'chunk-vendors', 'chunk-common', 'visual' ]
      }
    }
  }