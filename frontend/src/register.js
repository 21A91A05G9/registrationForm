import React, { useState } from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
export default function Register() {
    const nav = useNavigate()
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
        axios.post('http://localhost:5001/register',formdata).then((res)=>{
                alert(res.data.msg)
                
                if(res.data.msg==='successfully registered'){
                    nav('/login/')
                }
            
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
               
                <div className="row mb-4">
                 
                    <div className="col-sm-12">
                    <input type="password" id="inputPassword3"  placeholder="Password"  onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
                    </div>
                </div>
                <div className='text-center mb-2'><button  className="btn btn-light btn-sm" >Register</button></div>   
                <div className='text-center mt-1'><p>Already have an account? <Link to='/login'>Login</Link></p></div>

                </form>
               
                </div>
        </div>  
        </div>

    </div>
      
  )
}
