import { Typography } from '@material-ui/core';
import React from 'react'
import ExpenseItem from './ExpenseItem';
import '../../assets/css/expensesList.css';
const ExpensesList = (props) => {

    if(props.expenses.length === 0) {
        return <Typography className='expenses-list_fallback' variant='h4'>Found No Expenses</Typography>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense)=> (
                <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />))
            }
        </ul>
    )
}

export default ExpensesList
