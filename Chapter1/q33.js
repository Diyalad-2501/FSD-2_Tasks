s = '{"date":"2017-01-25"}'

s = JSON.parse(s)

d = new Date(s.date)
console.log(d)