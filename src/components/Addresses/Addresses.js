import { Table,TableHead,TableRow,TableCell,TableBody } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function Addresses(props) {
    return (
        <div>
           <h1>List of Addresses</h1>
           <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Details</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
               {props.data.map((item, index) => {
                return (
                <TableRow key={`${item.name.first}${item.name.last}`}>
                    <TableCell>{item.name.last}</TableCell>
                    <TableCell>{item.name.first}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell><Link to={`/users/${item.userId}`}>Link</Link></TableCell>
                </TableRow>
                )
                })}
            </TableBody>
            </Table>
        </div>
    )
}
