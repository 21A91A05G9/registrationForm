import React, { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Login() {
  
    const [logindata,setLogindata] = useState(
        {
            username:'',
            password:''
        }
    )
    const  handleLogin = (e) => {
        e.preventDefault(); 
        
        axios.post('http://localhost:5001/login',logindata).then((res)=>{
            console.log(logindata)
            if(res.data.msg === 'success') {
                alert('login successfully')
            }
            else if(res.data.msg === 'incorrect password' ){
                alert('invalid password')
            }
            else alert('Not registered')
        }) 
    }
  return (
    <div className='container'>
        <div className='container login'>
        <div className="card ">
        
                <div className='header mb-3'>Login here</div>
              
                <div className="container-fluid">
                

                <form  onSubmit={handleLogin} >
                <div className="row mb-3">
                    <div className="col-sm-12">
                    <input type="text" id="Name3" placeholder="Username"  onChange={(e)=>setLogindata({...logindata,username:e.target.value})}  required />
                    </div>
                </div>
                
                <div className="row mb-4">
                 
                    <div className="col-sm-12">
                    <input type="password" id="inputPassword3"  placeholder="Password"  onChange={(e)=>setLogindata({...logindata,password:e.target.value})}  required/>
                    </div>
                </div>
                <div className='text-center mb-2'><button  className="btn btn-light btn-sm" >Login</button></div>   
                <div className='text-center mt-1'><p>Don't have an account? <Link to='/register'>Register</Link></p></div>

                </form>
               
                </div>
        </div>  
        </div>

    </div>
      
  )
}
