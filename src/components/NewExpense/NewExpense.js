import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';

import '../../assets/css/newExpense.css'
import NewExpenseButton from './NewExpenseButton';

const NewExpense = (props) => {
    const [formToggle, setFormToggle] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData)  => {
        const expenseData = {
            ...enteredExpenseData, 
            id: Math.random().toString()
        };

        

        setFormToggle(false)
        props.onAddExpense(expenseData)
    }

    const newExpenseButtonToggle = (event)=> {
        setFormToggle(true)
    }

    const cancelButton = (event) => {
        setFormToggle(false)
    }
    
    return (
        <div className='new-expense'>
            {formToggle === true? 
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButton}/> :   
                <NewExpenseButton onToggle={newExpenseButtonToggle}/> 
            }
            
        </div>
    )
}

export default NewExpense
