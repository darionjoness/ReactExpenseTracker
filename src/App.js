import Header from "./components/Header";
import AddItem from "./components/AddItem";
import AddedItems from "./components/AddedItems";
import { useState } from "react";


function App() {
  const [nameInput, setNameInput] = useState('')
  const [dateInput, setDateInput] = useState('')
  const [amountInput, setAmountInput] = useState('')
  const [expenseItems, setExpenseItems] = useState([])

  // Create addItem function
  const addItem = () => {
    setNameInput('')
    setDateInput('')
    setAmountInput('')
    // Spread exenseItems in a newArr
    let newArr = [...expenseItems]

    // Push an object onto the newArr
    newArr.push({
      id: Math.floor(Math.random() * 10000), 
      name: nameInput, 
      date: dateInput, 
      amount: amountInput
    })

    // setExpenseItems state to newArr
    setExpenseItems(newArr)
  }

  // Create delete expense function
  const deleteExpense = (id) => {
    // Filter out the expenseItems to show items that done match id of item clicked
    setExpenseItems(expenseItems.filter(item => item.id !== id))
  }


  return (
    <div className="App">
      <Header />
      <AddItem 
      text={nameInput} 
      nameOnChange={(e) => setNameInput(e.target.value)} 
      date={dateInput} 
      dateOnChange={(e) => setDateInput(e.target.value)} 
      amount={amountInput} 
      amountOnChange={(e) => setAmountInput(e.target.value)}
      addItem={addItem}
        />
        <AddedItems expenseItems={expenseItems} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
