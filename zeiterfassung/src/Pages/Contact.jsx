import React from 'react';
import "./Contact.css"
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';


function Contact() {
    return (
        <div>
            
        

            <Form class="contact-form" action="index.html" method="post">

            <h1>Contact Us</h1>

    
                <FormGroup>
                
                
                <Input type="text" class="contact-form-text" placeholder="First Name"/>


                <Input type="text" class="contact-form-text" placeholder="Last Name"/>

               
                <Input type="email" class="contact-form-text" placeholder="Email"/>

                
                <Input type="text" class="contact-form-text" placeholder="Your phone"/>

                <Input type="text" class="contact-form-text" placeholder=" Address"/>


                <Label for="exampleText" sm={2}>Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />

                </FormGroup>

                

                <Button type="submit" class="btn" value="Send">Send</Button>
                
            </Form>
            </div>

                
                    
            

                
                

        
    )
}

export default Contact
