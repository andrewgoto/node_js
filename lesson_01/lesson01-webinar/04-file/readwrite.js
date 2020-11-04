const fs = require('fs')
const file = '../03-internal/path.js'

console.log(__dirname)
console.log(__filename)

fs.readFile(file, (err, data) => {
  if (err) {
    console.error(err.message)
    return
  }
  if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp')
  }
  console.log(data)
  console.log(data.toString())
  fs.writeFile(
    './temp/path.js',
    `${data.toString()}console.log('Successfully updated')`,
    (err) => {
      if (err) {
        console.error(err)
        return
      }
    },
  )
})
