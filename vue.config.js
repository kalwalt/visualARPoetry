module.exports = {
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.ts',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
      },
      visual: {
          entry: 'src/pages/visual.ts',
          template: 'public/visual.html',
          filename: 'visual.html',
          title: 'Visual page'
      }
    }
  }