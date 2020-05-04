// const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const IN_PRODUCTION = true
const whitelister = require('purgecss-whitelister')
module.exports = {
  plugins: [
    require('postcss-import'),
    // ...(IN_PRODUCTION
    //   ? [
    //       require('@fullhuman/postcss-purgecss')({
    //         content: [`./public/**/*.html`, `./src/**/*.vue`],
    //         defaultExtractor(content) {
    //           const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
    //           return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    //         },
    //         whitelist: ['antialiased', 'leading-normal', ...whitelister('./theme/*.css')],
    //         whitelistPatterns: [
    //           /-(leave|enter|appear)(|-(to|from|active))$/,
    //           /^(?!(|.*?:)cursor-move).+-move$/,
    //           /^router-link(|-exact)-active$/,
    //           /^\.avue-.*/,
    //           /^\.el-.*/
    //         ]
    //       })
    //     ]
    //   : []),
    require('autoprefixer'),
    require('tailwindcss')()
  ]
}
