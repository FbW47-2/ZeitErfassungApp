import React from 'react'
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';
import { Redirect } from 'react-router-dom'



function DisplayContact({contactInfo}) {
    console.log(contactInfo);
    

    const handleSubmit = () => {
        alert("Ihre Daten wurden erfolgreich übertragen");
        <Redirect to='/'s /> 
    }



    return (
       
         <Form className="checkDiv">
          <h1>your Information</h1>
        
            <br />

            <p className="info">FirstName: <span>{contactInfo.firstName}</span></p>
            <br />
    
            <p className="info">LastName: <span>{contactInfo.lastName}</span></p>
            <br />
            <p className="info">Email: <span>{contactInfo.email}</span></p>
            <br />
            <p className="info">Phone: <span>{contactInfo.phone}</span></p>
            <br />
            <p className="info">Address: <span>{contactInfo.address}</span></p>
            <br />
            <p className="info-Beschreibung">Beschreibung:<div className="text">
                                 {contactInfo.description}</div> </p>
            <Button type="submit" class="btn" value="Submit" color="info" onClick={handleSubmit}>Send</Button>

        </Form> 
            
        
    )
}

export default DisplayContact