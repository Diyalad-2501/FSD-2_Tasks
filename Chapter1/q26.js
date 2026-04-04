const b ='{"books":[{"id":1 , "topic":"abc" , "edition":2007 , "auhtor":"Mihu"},{"id":2 , "topic":"xyz" , "edition":2009 , "auhtor":"Diya"},{"id":3 , "topic":"pqr" , "edition":2010, "auhtor":"Azzu"}]}'
const a = JSON.parse(b)

for(i in a.books){
    console.log(a.books[i])
}