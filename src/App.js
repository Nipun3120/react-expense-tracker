import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
import { Typography } from '@material-ui/core';

function App() {

    return ( 
        <>
            <Typography variant='h2' align='center' color='secondary'>Recent Tasks</Typography>
            <NewExpense />
            <Expenses />
        </>

    );
}

export default App;
