import '../assets/css/expenses.css';
import Card from '../assets/js/Card';

import ExpenseItem from './ExpenseItem';

const Expenses = () => {
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
    
    return (
        <Card className='expenses'>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </Card>  
    )
}

export default Expenses
