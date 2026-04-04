let HomeExpenses = {
  transport: 3000,
  foodBill: 5000,
  family: {
    mother: { name: "Anita", expenses: 2000 },
    father: { name: "Rajesh", expenses: 4000 },
    brother: { name: "Arjun", expenses: 1500 },
    sister: { name: "Diya", expenses: 2500 }
  }
};


console.log(`Expenses of ${HomeExpenses.family.father.name}: ₹${HomeExpenses.family.father.expenses}`);
