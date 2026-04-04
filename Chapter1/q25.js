const usersData = `{
  "users": [
    { "name": "Amit", "age": "21", "city": "Ahmedabad" },
    { "name": "Riya", "age": "21", "city": "Surat" },
    { "name": "Karan", "age": "21", "city": "Vadodara" }
  ]
}`

a = JSON.parse(usersData)

console.log(a.users)
console.log(a.users[1].name)
console.log(a.users[1].age)