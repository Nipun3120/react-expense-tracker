import '../assets/css/ExpenseItem.css';
import Card from '../assets/js/Card';
import ExpenseDate from './ExpenseDate';

const expenseItem = (props) => {

    const clickHandler = ()=> {
        console.log('click')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler} >Click</button>
            </div>
        </Card>
    )
}

export default expenseItem
