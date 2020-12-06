import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button, Table, tbody
    , Badge
} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    //console.log(users[0].name);
    return (
        // <ListGroup>
        //     <ListGroupItem className="d-flex">
        //         <strong>An</strong>
        //         <div className="ml-auto">
        //         <Link className="btn btn-primary mr-1" to="/edit/1">Edit</Link>
        //         <Button color="danger">Delete</Button>
        //         </div>
        //     </ListGroupItem>
            
        // </ListGroup>
        <Table striped dark>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            
            <th>Action</th>
          </tr>
        </thead>
        
        <tbody>
        {users.length > 0 ? (
            <>
           {users.map(user => (
            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>
                <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Edit</Link>
               <Button onClick={()=>removeUser(user.id)} color="danger">Delete</Button>
            </td>
            
          </tr>
           )
           )} 
        </>
        ) : (
            <h1><Badge color="danger">No User found</Badge></h1>
            )}
          </tbody>
        </Table>
    )
}
