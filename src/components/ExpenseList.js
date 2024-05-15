import React from 'react'
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, initialExpenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
    <ul className='list'>
        {initialExpenses.map(expense => {
          return (
            <ExpenseItem key={expense.id} expense={expense}
            handleDelete={handleDelete} handleEdit={handleEdit}
             />
          )
        })}  
        </ul>
       {expenses.length > 0  ?
        <button className='btn' onClick={clearItems}>
            목록 지우기 
        <MdDelete className= 'btn-icon'/>    
        </button>
        :null
       }
      </>
  ) 
}
//함수표현식 , 함수 선언식은 function expenseList() {} 이렇게 생김
export default ExpenseList




