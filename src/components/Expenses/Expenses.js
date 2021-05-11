import { useState } from 'react';
import '../../assets/css/expenses.css';
import Card from '../../assets/js/Card';
import ExpensesFilter from './ExpenseFilter';

import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (yearSelected) => {
        setFilteredYear(yearSelected);
    }
    
    return (
      <div>
        
        <Card className='expenses'>
            <ExpensesFilter onChangeFilterValue={filterChangeHandler} currentSelectedYear = {filteredYear}/>
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
            <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
        </Card>  
      </div> 
    )
}

export default Expenses
