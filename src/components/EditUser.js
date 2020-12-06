import React, { useContext, useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid';


export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState(
        {
            id: '',
            name: ''
        }
    );
    const {users, editUser} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id; //Tra ve string
    console.log(currentUserId);
    useEffect(() => {
        const userId = currentUserId; //day la string
        const selectedUser = users.find(user=>user.id === (userId)) //phai conver sang number
        setSelectedUser(selectedUser);
        
    }, [])
    const onSubmit = ()=>{
        // const newUser = {
        //     id: uuid(),
        //     name
        // }
        // editUser(newUser);
        editUser(selectedUser);
        history.push('/');
    }
    const onChange = (e) =>{
        setSelectedUser({
            ...selectedUser, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter Name"></Input>
        </FormGroup>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        <Button type="submit" className="primary">Edit</Button>
        
    </Form>
    )
}
