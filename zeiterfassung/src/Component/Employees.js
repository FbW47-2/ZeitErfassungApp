import React, {useState,useEffect} from 'react'
import {ListGroup, ListGroupItem, Button, InputGroup, Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Employees.css';


function Employees() {
    const [newName, setNewName] =useState('')
    const employees = ["Galip","Lamia","Ahmad", "Cüneyt", "Zeynep"];
    const [allEmployee, setAllEmployee] = useState(employees);
console.log(allEmployee);
    const newPerson= ()=>{
      setAllEmployee([newName, ...allEmployee])
       console.log(newName);
        setNewName("");
    
    }


   

    return (
        <div>
            <div className="InputDiv m-2 border border-dark rounded">
                <InputGroup className="">
                    <Input  onChange={e =>setNewName(e.target.value)} value={newName} placeholder="Name" />
                    <Button className="AddButton p-0" block onClick={newPerson} color="secondary">New Person</Button>
                </InputGroup> 
            </div>

            <div className="EmployeesList m-2 border border-dark rounded">
            
            {allEmployee.map((employee,key) =>{
                return <ListGroup key={key} className=" ">
                    <ListGroupItem  tag="a" href="#" action>{employee}</ListGroupItem>
                </ListGroup>
            })}
             
            </div>
        </div>
    )
}

export default Employees
