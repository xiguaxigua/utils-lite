const rollup = require('rollup')
const uglify = require('rollup-plugin-uglify').uglify
const babel = require('rollup-plugin-babel')
const formatList = ['es', 'cjs', 'umd']
const eslint = require('rollup-plugin-eslint')
const minify = require('uglify-es').minify
const resolve = require('rollup-plugin-node-resolve')
const common = require('rollup-plugin-commonjs')
const LessPacker = require('less-packer')

LessPacker({
  entry: 'src/css/index.less',
  output: 'lib/index.less',
  dev: false,
  testOutput: 'dest/index.css',
  testFile: 'src/css/test.less',
  watchDir: 'src/css',
  format: ['sass', 'stylus']
})

for (let i = 0; i < 2; i++) {
  const plugins = [
    resolve(),
    common(),
    eslint(),
    babel()
  ]
  if (i) plugins.push(uglify({}, minify))
  rollup.rollup({
    input: 'src/js/index.js',
    plugins
  }).then(bundle => {
    for (let j = 0; j < 3; j++) {
      const type = formatList[j]
      bundle.write({
        format: type,
        name: 'UtilsLite',
        file: `lib/index.${type}${i ? '.min' : ''}.js`
      }).catch(e => {
        console.log(e)
        process.exit(1)
      })
    }
  }).catch(e => {
    console.log(e)
    process.exit(1)
  })
}
