import React from 'react'
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';

function ShowContact({contactInfo}) {
    console.log(contactInfo);
    return (
        <div>
            

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

        </Form> 
            
        </div>
    )
}

export default ShowContact

