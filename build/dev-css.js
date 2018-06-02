const LessPacker = require('less-packer')

LessPacker({
  entry: 'src/css/index.less',
  output: 'lib/index.less',
  dev: true,
  testOutput: 'dist/index.css',
  testFile: 'src/css/test.less',
  watchDir: 'src/css',
  format: ['sass', 'stylus']
})
