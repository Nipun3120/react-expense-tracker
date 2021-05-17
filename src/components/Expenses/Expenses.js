import { Typography } from '@material-ui/core';
import { useState } from 'react';
import '../../assets/css/expenses.css';
import Card from '../../assets/js/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (yearSelected) => {
        setFilteredYear(yearSelected);
    }
    
    const expenseYearFiltered = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
      <div>    
        <Card className='expenses'>
            <ExpensesFilter 
              onChangeFilterValue={filterChangeHandler} 
              currentSelectedYear = {filteredYear}
            />
            
            <ExpensesList expenses={expenseYearFiltered}/>
        </Card>  
      </div> 
    )
}

export default Expenses
