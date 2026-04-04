p = require('path')

path = '/user/docs/report.txt'
q = p.parse(path)
console.log("Directory name",q.dir)
console.log("Base file",q.base)
console.log('File extension',q.ext)
