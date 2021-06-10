import React from 'react'

function Buttons({clickedPerson,setClickedPerson, employees, setEmployees,baslatFunc,bitirFunc}) {


    



    return (
        <div className="buttons" >
          
            <button onClick={baslatFunc} > Start Work {clickedPerson.name} </button>
            
            <button onClick={bitirFunc} >Finish Work {clickedPerson.name} </button>
           
        </div>
    )
}

export default Buttons