import React, { useState } from 'react'
import '../../assets/css/expenseForm.css'

const ExpenseForm = (props) => {
    // multi state approach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    // single state approach
    // // alternate approach to use the useState
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });


    
    const titleChangeHandler = (eventObject) => {   // eventObject is the event object generated by any change in input field 
        setEnteredTitle(eventObject.target.value);

        // // alternate approach (theory in book): 
        // setUserInput((prevUserInput) => {
        //     return {...prevUserInput, enteredTitle: eventObject.target.value};
        // })
    }

    const amountChangehandler = (eventObject) =>{
        setEnteredAmount(eventObject.target.value);

        // // alternate approach (theory in book): 
        // setUserInput((prevUserInput) => {
        //     return {...prevUserInput, enteredAmount: eventObject.target.value};
        // })
    };
    const dateChangeHandler = (eventObject) => {
        setEnteredDate(eventObject.target.value);

        // // alternate approach (theory in book): 
        // setUserInput((prevUserInput) => {
        //     return {...prevUserInput, enteredDate: eventObject.target.value};
        // })
    }


    const closeForm = (event) => {
        event.preventDefault();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onCancel(event)
    }


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
    
            props.onSaveExpenseData(expenseData);
            
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
    }



    return (
     <form onSubmit={formSubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredTitle}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangehandler} value={enteredAmount}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} value={enteredDate}/>
            </div>
        </div>

        <div className='new-expense__actions'>
            <button type='button' onClick={closeForm}>Cancel</button>
            <button type='submit' >Add Expense</button>
        </div>
     </form>
    )
}

export default ExpenseForm