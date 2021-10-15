import './addresses.css'
import Loader from '../Loader/Loader';
import { Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function Addresses(props) {
    const compareFirstLetterLastName = (a, b) => {
        if (a < b) return -1;
        if(a > b ) return 1;
        return 0;
    }
    props.data.sort((a, b) => {
    
        return compareFirstLetterLastName(a.name.last, b.name.last)
    })
    
    if(props.data.length === 0) {return <Loader />}
    return (
        <div className="addressList">
           <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell className="tableHead">Name</TableCell>
                    <TableCell className="tableHead">Address</TableCell>
                    <TableCell className="tableHead">Details</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
               {props.data.map((item) => {
                return (
                <TableRow key={`${item.userId}`}>
                    <TableCell><img src={`${item.picture.thumbnail}`} alt=""></img></TableCell>
                    <TableCell>{item.name.last}, {item.name.first}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell><Link to={`/users/${item.userId}`} className="detailLink">Link</Link></TableCell>
                </TableRow>
                )
                })}
            </TableBody>
            </Table>
        </div>
    )
}
