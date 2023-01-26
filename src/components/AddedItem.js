import React from 'react'
import Button from './Button'

const AddedItem = ({ item, deleteExpense }) => {
  return (
    <tr className='addedItem'>
        <th>{item.name}</th>
        <th>{item.date}</th>
        <th>{item.amount}</th>
        <th><Button text={'X'} classText={'xBtn'} onClick={() => deleteExpense(item.id)} /></th>
    </tr>
  )
}

export default AddedItem