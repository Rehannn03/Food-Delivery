import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
const Login = () => {
    const [details,setDetails]=useState({email:'',password:''})
    let navigate=useNavigate()
    const handleSubmit= async (e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/loginuser',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:details.email,password:details.password})
        })
        
        const json=await response.json()
        console.log(json)
        if(!json.success){
            alert('Enter Valid Information')
        }        
        if(json.success){
            navigate('/')
        }
    }


    const onChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    return (
        <div>
            <div className="container">
            <div>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={details.email} onChange={onChange} autoComplete="off" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={details.password} onChange={onChange} autoComplete="off"/>
                    </div>
                    
                    
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to='/createuser' className="m-3 btn btn-danger">New User</Link>
                </form>
            </div>
        </div>
        </div>
    );
}
 
export default Login;