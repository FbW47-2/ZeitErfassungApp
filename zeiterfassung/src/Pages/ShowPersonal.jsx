import React, {createContext, useState } from 'react'
import Employees from '../Component/Employees'
import Details from '../Component/Details'
import NavBar from '../NavBar'
import './ShowPersonnel.css'
import logo from '../Fotos/Cüneyt.jpg'
 

export const ThemeContext = createContext();

function ShowPersonal() {
    const [personalInfoVisibility, setPersonalInfoVisibility] = useState("hidden");

    const [emptyInfo, setEmptyInfo] = useState({
        name:"",
        surname: "",
        job:"",
        foto:""
    });

    const employees = [{
        name:"Galip",
        surname: "Savut",
        job:"Test Developer",
        foto:"https://avatars.githubusercontent.com/u/61105054?v=4"
        
    },
    {
        name:"Ahmad",
        surname: "Hasan",
        job:"Frontend Developer",
        foto: "https://media-exp1.licdn.com/dms/image/C4D03AQFoBRaq3fFsMA/profile-displayphoto-shrink_200_200/0/1602587368835?e=1628121600&v=beta&t=ZdI61hIh01OJyLqKUSUl_huXxDoOaiNTcJb282oAP1M"
        
    },
    {
        name:"Cüneyt",
        surname: "Celebi",
        job:"Full Stack Developer",
        foto:logo
        
    },
    {
        name:"Lamia",
        surname: "Gülsah",
        job:"Backend Developer",
        foto: ""
        
    },
    {
        name:"Zeynep",
        surname: "Gültekin",
        job:"Full Stack Developer",
        
    }];
    return (
        <>
        <NavBar/>
        <div className="ShowDiv">
            {/* {employees.name =="Galip" ? } */}
            
            <ThemeContext.Provider value={{employees, personalInfoVisibility, setPersonalInfoVisibility, emptyInfo, setEmptyInfo}}>

            <Employees />
            <Details/>
            </ThemeContext.Provider>

        </div>
        </>
    )
}

export default ShowPersonal
