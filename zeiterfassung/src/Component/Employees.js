import React, {useState,useContext} from 'react'
import {ListGroup, ListGroupItem, Button, InputGroup, Input} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Employees.css';
import {ThemeContext} from '../Pages/ShowPersonal'
function Employees() {
    const {employees, setPersonalInfoVisibility, setEmptyInfo} = useContext(ThemeContext)
    const [newName, setNewName] =useState('')
    const showDetails =(e)=>{
        setPersonalInfoVisibility("visible")
         employees.map(employee =>
            {
            if(employee.name === e.target.innerText){
                setEmptyInfo({
                    name:employee.name,
                    surname:employee.surname,
                    job:employee.job,
                    foto: employee.foto
                 })
            }
        })
    }
    const [allEmployee, setAllEmployee] = useState(employees);
    const newPerson= ()=>{
      setAllEmployee([{name:newName}, ...allEmployee])
        setNewName("");
        console.log(newName);
    }
    return (
        <div className="EmployeesDiv">
            <div className="InputDiv m-2 border border-dark rounded">
                <InputGroup className="">
                    <Input  onChange={e =>setNewName(e.target.value)} value={newName} placeholder="Name" />
                    <Button className="AddButton p-0" block onClick={newPerson} color="success">New Person</Button>
                </InputGroup> 
            </div>
            <div className="EmployeesList m-2 border border-dark rounded">
            {allEmployee.map((employee,key) =>{
                return <ListGroup key={key}>
                    <ListGroupItem onClick={showDetails} tag="a" href="#" action>{employee.name}</ListGroupItem>
                </ListGroup>
            })}
            </div>
        </div>
    )
}
export default Employees