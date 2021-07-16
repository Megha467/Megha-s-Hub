import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Container, Nav, Form, FormCheck } from 'react-bootstrap';
import './LoginForm.css'
function LoginForm()
{
  let myStyle = { height : '60px'}
  const[firstName, setf_Name] = useState("");
  const[lastName, setl_Name] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");
  const[address, setaddress] = useState("");
  const[city, setCity] = useState("");
  const[stat, setStat] = useState("");
  const[country, setCountry] = useState("");
  const[account, setAccount] = useState("");
  let obj;
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {firstName, lastName, email, phone, address, city, stat, country, account}

    fetch('http://api.giphy.com/v1/gifs/search?q&api_key=dc6zaTOxFJmzC', {
      method: 'POST',
      headers : { "Content-Type" : "application/json" },
      body: JSON.stringify(info),

    }).then((response) => {
      console.log('Data Added');
       obj = response.json();
    })
  }
  return(     
<div className ="signUp">  
<Container >    
  <form onSubmit = {handleSubmit}>
  <label  className = 'lbl' >
   Register
  </label>
  <hr className='ml-3'/>
  <input type ="text" placeholder="First Name" value = {firstName} onChange = {(e) => setf_Name(e.target.value)}  />
  <input type ="text" placeholder="Last Name" value = {lastName} onChange = {(e) => setl_Name(e.target.value)}/>
  <input type ="text" placeholder="CNIC"  value = {email} onChange = {(e) => setEmail(e.target.value)}/>
  <input type ="text" placeholder="Email" value = {phone} onChange = {(e) => setPhone(e.target.value)}/>
  <input type ="text" placeholder="Phone"  value = {address} onChange = {(e) => setaddress(e.target.value)}/>
  <input type ="text" placeholder="Address"  style = {myStyle}/>
 
  <select className='opt' value = {city} onChange = {(e) => setCity(e.target.value)}>
  <option selected value="City">City</option>
  <option value="Sukkur">Sukkur</option>
  <option value="Shikarpur">Shikarpur</option>
</select>

<select  className='opt' value = {stat} onChange = {(e) => setStat(e.target.value)}>
  <option selected value="State">State</option>
  <option value="Sindh">Sindh</option>
  <option value="Punjab">Punjab</option>
</select>

<select  className='opt' value = {country} onChange = {(e) => setCountry(e.target.value)}>
  <option selected value="Country">Country</option>
  <option value="Sindh">Sindh</option>
  <option value="Punjab">Punjab</option>
</select>
<br/>

<select className='opt1' value = {account} onChange = {(e) => setAccount(e.target.value)}>
  <option selected value="Account">Account Type</option>
  <option value="Sindh">Student</option>
  <option value="Punjab">Teacher</option>
</select>

<input class="form-check-input " type="checkbox" value="" id="flexcheckdefault" />
    <label class="form-check-label " for="flexcheckdefault">
      I agree to our terms  and  Privacy Policy
  </label>
<button type = 'submit' className='btn btn-primary'> Login </button>
</form>
<section/>
</Container>  
</div>  
  )
};
export default LoginForm;
    