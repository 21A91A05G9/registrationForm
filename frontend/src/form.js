import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Form() {
    const [formdata,setFormdata] = useState(
        {
            name:'',
            username:'',
            email:'',
            password:''
        }
    )
    const  handleReg = (e) => {
        e.preventDefault(); 
       
        // var newPassword = formdata.password
        // var minNumberofChars = 6;
        // var maxNumberofChars = 16;
        // var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; 
        // if(newPassword.length < minNumberofChars) alert("Minimum 6 characters")
        // else if (newPassword.length > maxNumberofChars) alert("Maximum 16 charaters")
        
        // else if(!regularExpression.test(newPassword)) {
        //     alert("password should contain atleast one number and one special character");
            
        // }
        
        axios.post('http://localhost:5001/register',formdata).then(()=>{
        console.log(formdata)
        }) 
    }
  return (
    <div className='container'>
        <div className='container login'>
        <div className="card  mb-3">
        
                <div className='header mb-3'>Register here</div>
              
                <div className="container-fluid">
                

                <form  onSubmit={handleReg} className='mt-3'>
                <div className="row mb-3">
                    {/* <label for="Name3" className="col-sm-4 col-form-label">Name</label> */}
                    <div className="col-sm-12">
                    <input type="text" id="Name3" placeholder="Name" onChange={(e)=>setFormdata({...formdata,name:e.target.value})}  />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                    <input type="text" id="Name3" placeholder="Username"  onChange={(e)=>setFormdata({...formdata,username:e.target.value})}  />
                    </div>
                </div>
                <div className="row mb-3">
                 
                    <div className="col-sm-12">
                    <input type="email" id="inputEmail3"  placeholder="Email"  onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
                    </div>
                </div>
               
                <div className="row mb-3">
                 
                    <div className="col-sm-12">
                    <input type="password" id="inputPassword3"  placeholder="Password"  onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
                    </div>
                </div>
                <div className='text-center mb-4'><button  className="btn btn-light btn-sm" >Register</button></div>   
                <div className='text-center mt-2'><p>Already have an account? <Link to='/'>Login</Link></p></div>

                </form>
               
                </div>
        </div>  
        </div>

    </div>
      
  )
}
