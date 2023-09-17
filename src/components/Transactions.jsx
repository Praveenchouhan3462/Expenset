import { Box, Typography, List, Divider } from "@mui/material";
import Transaction from "./Transaction";
const Transactions=({ transactions,setTransactions })=>{
    return (
       <Box>
        <Typography variant="h5">Transaction history</Typography>
        <Divider />
        <List>
            {
                transactions.map(transaction=>(
                    <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                ))
            }
            
        </List>
       </Box>
    )
}


export default Transactions;