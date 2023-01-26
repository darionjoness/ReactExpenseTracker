import React from 'react'
import Button from './Button'

const AddItem = ({ nameOnChange, dateOnChange, amountOnChange, amount, date, text, addItem }) => {
  return (
    <div className='addItem'>

        <h2>Add A New Item: </h2>

        <div className="name">
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' placeholder='Where was the expense made?' onChange={nameOnChange} value={text} />
        </div>

        <div className="dateAndAmount">
            <div className="date">
                <label htmlFor="date">Date: </label>
                <input type="date" name='date' placeholder='mm/dd/yyyy' onChange={dateOnChange} value={date} />
            </div>
            <div className="amount">
                <label htmlFor="amount">Amount: </label>
                <input type="number" name='amount' placeholder='$$$' onChange={amountOnChange} value={amount} />
            </div>
        </div>

        <Button text={'Add Expense'} classText={'btn addBtn'} onClick={addItem} />
    </div>
  )
}

export default AddItem