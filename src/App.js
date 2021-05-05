import { Typography } from '@material-ui/core';
import Expenses from './components/Expenses';

function App() {

    return ( 
        <>
        <Typography variant='h2' color='secondary'>Recent Tasks</Typography>
        <Expenses />
        </>

    );
}

export default App;