var test = {
  "division1": {
    "name": ["Z", "B", "H"]
  },
  "division2": {
    "name": ["Y", "A", "G"]
  }
};

test.division1.name.sort()
test.division2.name.sort()

x = test.division1.name.concat(test.division2.name)
x.sort()
console.log(test)
console.log(x)