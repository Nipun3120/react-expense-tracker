import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { Typography } from '@material-ui/core';

const TEMP_EXPENSES = [
    {
        id: '1',
        title: 'Car Insurance',
        amount: 105.09,
        date: new Date(2021, 0, 30)
    },
    {
        id: '2',
        title: 'Music player',
        amount: 75.99,
        date: new Date(2021, 0, 27)
    },
    {
        id: '3',
        title: 'Play Station 5',
        amount: 350.49,
        date: new Date(2021, 1, 16)
    },
    {
        id: '4',
        title: 'Macbook Pro Repair',
        amount: 599.99,
        date: new Date(2021, 2, 23)
    },
]

function App() {
    const[expenses, setExpenses] = useState(TEMP_EXPENSES);
    
    const addExpenseHandler = (expense) => {
        setExpenses((previousExpenses)=> {
            return [expense, ...previousExpenses]
        })
    }

    return ( 
        <>
            <Typography variant='h3' align='center' color='secondary'>Expense Tracker</Typography>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses} />
        </>

    );
}

export default App;
