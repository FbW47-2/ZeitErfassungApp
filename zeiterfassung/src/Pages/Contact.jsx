import React from 'react';
import "./Contact.css";
import NavBar from "../NavBar"
import { Button, Input, Form , FormGroup, Label, Row, Col} from 'reactstrap';
import ShowContact from "./ShowContact.js";
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom"

/* 
function Contact() {
    return (
        <div>
            
        

            <Form class="contact-form" action="index.html" method="post">

            

    
                <FormGroup>
                
                
                <Input type="text" class="contact-form-text" placeholder="First Name"/>


                <Input type="text" class="contact-form-text" placeholder="Last Name"/>

               
                <Input type="email" class="contact-form-text" placeholder="Email"/>

                
                <Input type="text" class="contact-form-text" placeholder="Your phone"/>

                <Input type="text" class="contact-form-text" placeholder=" Address"/>

                <Label for="exampleText</NavBar>

                
                    
            

                
                

        
    )
} */

const init ={
  "firstName" : "",
  "lastName" : "",
  "email" : "",
  "phone" : "",
  "address" : "",
  "description" : ""
}

function Contact() {
    let [firstName, setFirstName] = React.useState('');
    let [lastName, setLastName] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [phone, setPhone] = React.useState('');
    let [address, setAddress] = React.useState('');
    let [description, setDescription] = React.useState('');
    let [contactInfo, setContactInfo] =React.useState(init);
    let [showInfo, setShowInfo] =React.useState(false);
   
    /*
    let [submittedFirstName, setSubmittedFirstName]=React.useState('');
    let [submittedLastName, setSubmittedLastName] = React.useState('');
    let [submittedEmail, setSubmittedEmail] = React.useState('');
    let [submittedPhone, setSubmittedPhone] = React.useState('');
    let [submittedAddress, setSubmittedAddress] = React.useState('');
    let [submittedDescription, setSubmittedDescription] = React.useState('');
    */
  
    const handleChangeFirstName = (event) => {
      setFirstName(event.target.value);
      
    }


    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
  
      }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
  
      }

      const handleChangePhone = (event) => {
        setPhone(event.target.value);
  
      }

      const handleChangeAddress = (event) => {
        setAddress(event.target.value);
  
      }

    
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    }
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      /*
      setSubmittedFirstName(firstName);
      setSubmittedLastName(lastName);
      setSubmittedEmail(email);
      setSubmittedPhone(phone);
      setSubmittedAddress(address);
      setSubmittedDescription(description);
      */
      console.log("submit handled");
      /* object mit allem prop zusammen bauen */

      const contactInfo ={
        "firstName" : firstName,
        "lastName" : lastName,
        "email" : email,
        "phone" : phone,
        "address" : address,
        "description" : description
      }

      console.log("contactInfo: ", contactInfo)
      /* showContact rendern */
      setContactInfo(contactInfo)
      setShowInfo(!showInfo)
      



    }

    /*const renderComponent = () => {
      return <div> <ShowContact contactInfo = {contactInfo}/></div>
    } */


  const handleReset = () => {
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setDescription('');
    console.log("reset handle");
  }
  
    return (
      <>
      <NavBar/>
      <div className="main">
        
       {showInfo && <ShowContact contactInfo = {contactInfo}/> }
        
        <Form class="contact-form " onReset={handleReset} onSubmit={handleSubmit}>

        <h1>Contact Us</h1>
            <p className="problem">if you have any problem</p>
          

          <FormGroup className="row">

          <Input type="text" class="contact-form-text" placeholder="First Name"
          onChange={handleChangeFirstName} value={firstName}/>

         <Input type="text" class="contact-form-text" placeholder="Last Name"
          onChange={handleChangeLastName} value={lastName}/>

        <Input type="email" class="contact-form-text" placeholder="Email" onChange={handleChangeEmail} value={email} />

        <Input type="text" class="contact-form-text" placeholder="Phone" onChange={handleChangePhone} value={phone} />

        <Input type="text" class="contact-form-text" placeholder="Address" onChange={handleChangeAddress} value={address} />

        <Label for="exampleText" sm={2}> description</Label>

        <Input type="textarea" name="text" id="exampleText"
        value={description} onChange={handleDescriptionChange} />


        <Button type="reset" class="btn" value="Reset" color="info"  size="sm">Reset</Button>
        
        <Button type="submit" class="btn" value="Submit" color="info" >Send</Button>

    </FormGroup>

         
        </Form>

        

        
      </div>
      </>
    )
  }
  

export default Contact
