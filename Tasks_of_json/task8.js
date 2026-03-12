var test = {
  "division1": {
    "name": ["Z", "B", "H"]
  },
  "division2": {
    "name": ["Y", "A", "G"]
  }
};


test.division1.name.sort();
test.division2.name.sort();

var merged = test.division1.name.concat(test.division2.name);
merged.sort();
console.log("Final Sorted List:", merged);