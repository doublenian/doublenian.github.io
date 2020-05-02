const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const whitelister = require('purgecss-whitelister')
module.exports = {
  plugins: [
    require('postcss-import'),
    ...(IN_PRODUCTION
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: [`./public/**/*.html`, `./src/**/*.vue`],
            defaultExtractor(content) {
              const contentWithoutStyleBlocks = content.replace(
                /<style[^]+?<\/style>/gi,
                ''
              )
              return (
                contentWithoutStyleBlocks.match(
                  /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
                ) || []
              )
            },
            whitelist: [
              'antialiased',
              'leading-normal',
              ...whitelister('./node_modules/swiper/dist/css/swiper.css'),
              ...whitelister('./theme/*.css')
            ],
            whitelistPatterns: [
              /-(leave|enter|appear)(|-(to|from|active))$/,
              /^(?!(|.*?:)cursor-move).+-move$/,
              /^router-link(|-exact)-active$/,
              /^\.el-.*/
            ]
          })
        ]
      : []),
    require('autoprefixer'),
    require('tailwindcss')()
  ]
}
