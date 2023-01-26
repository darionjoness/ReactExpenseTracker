import React from 'react'
import AddedItem from './AddedItem'

const AddedItems = ({ expenseItems, deleteExpense }) => {
  return (
    <table className='addedItems'>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th></th>
            </tr>
                {expenseItems.map(item => 
                <AddedItem 
                key={item.id} 
                item={item} 
                deleteExpense={deleteExpense} 
                />  ) }
            </tbody>
    </table>
  )
}

export default AddedItems