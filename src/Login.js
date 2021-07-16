import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import LoginForm from './LoginForm';
import {Route,Link, Switch} from 'react-router-dom';
function Login()
{
  const[username, setusername] = useState('');
  const[password, setpassword] = useState();

  let obj;
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {username, password};

    fetch('192.168.1.111:1234/getStudentById', {
      method: 'POST',
      headers : { "Content-Type" : "application/json" },
      body: JSON.stringify(info),

    }).then((response) => {
      console.log('Data Added');
       obj = response.json();
       console.log(obj);
    }).catch((e) => {
    console.log(e);
    })
    if(obj.id === username)
    {
      alert('User Authenticated')
    }
    else
    {
      alert('Invalid User')
    }
    
  }
return (
<div className ="Log">  
    <form className ='frm'>
  <label  className = 'lbl' >
  Login
  </label>
  <hr className='ml-3'/>
  <input className = "inp" type ="text"  value = {username} onChange= {(e) => setusername(e.target.value)} />
  <input className = "inp" type ="password"  value={password} onChange= {(e) => setpassword(e.target.value)}/> 
  <label className = "font-weight-bold text-black pass">Forget Password ?</label>
<button type = 'submit' className='btn btn-primary' onClick = {handleSubmit}> Login </button>
<Link to="/LoginForm"><button type = 'submit' > create an account </button></Link>
</form> 
</div>     
);
}
export default Login;