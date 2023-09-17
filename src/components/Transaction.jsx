
import { ListItem, ListItemText,styled, ListItemIcon} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';




const Detail = styled(ListItem)`
margin-top:7px;
`


const Transaction = ({transaction,setTransactions}) => {
    const color = transaction.amount > 10 ? 'Green' : 'Red';
    const deleteTransaction =(id) =>{
      setTransactions(transaction.filter(transaction => transaction.id!==id))
    }
    return (
    <Detail style={{background: `${color}`,color:`#fff`}}>
      <ListItemIcon>
        <DeleteIcon onClick={()=> deleteTransaction(transaction.id)}/>
        </ListItemIcon> <ListItemText>
        {transaction.text}
       </ListItemText>
       <ListItemText>{transaction.amount}</ListItemText>
    </Detail>
    )
}
export default Transaction;