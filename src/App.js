import logo from './logo.svg';
import './App.css';

import { useState} from 'react';


import { Typography,styled, Box } from '@mui/material';
import Balance from './components/Balance';
import Expensecard from './components/Expensecard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
const Header = styled(Typography)`

font-size:36px;
color:blue;
text-transform:uppercase;
`
const Component = styled(Box)`
display: flex;
width:800px;
margin:auto;

background: #fff;
& > div{
  height:70vh;
  width:50%;
  padding : 10px;
}
`

function App() {
  const [ transactions, setTransactions] = useState([
    {id:1,text:'Momo',amount:-20},
    {id:2,text:'salary',amount:+100},
    {id:3,text:'drive',amount:-30},
    {id:4,text:'fashion',amount:-20}
  ])
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
      <Balance transactions={transactions}/>
      <Expensecard transactions={transactions} />
      <NewTransaction setTransactions={setTransactions} />
        </Box>
        <Box>
  <Transactions transactions={transactions} setTransactions={setTransactions}/>
        </Box>
      </Component>
    
  </Box>
  );
}

export default App;
