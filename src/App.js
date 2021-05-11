import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { Typography } from '@material-ui/core';

function App() {
    
    const expenses = [
        {
            id: 'e1',
            title: 'Car Insurance',
            amount: 105.09,
            date: new Date(2021, 0, 30)
        },
        {
            id: 'e2',
            title: 'Music player',
            amount: 75.99,
            date: new Date(2021, 0, 27)
        },
        {
            id: 'e3',
            title: 'Play Station 5',
            amount: 350.49,
            date: new Date(2021, 1, 16)
        },
        {
            id: 'e4',
            title: 'Macbook Pro Repair',
            amount: 599.99,
            date: new Date(2021, 2, 23)
        },
    ]

    const addExpenseHandler = (expense) => {
        
    }

    return ( 
        <>
            <Typography variant='h2' align='center' color='secondary'>Recent Tasks</Typography>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses} />
        </>

    );
}

export default App;
