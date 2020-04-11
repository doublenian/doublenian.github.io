const fs = require('fs')
let files = fs.readdirSync('./data')

files.forEach((file) => {
  let content = fs.readFileSync('./data/' + file, 'utf8')
  console.log('export default ' + JSON.parse(content))
})
