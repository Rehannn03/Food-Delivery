import { useState} from "react";
import { Link,useNavigate} from "react-router-dom";

const Signup = () => {
    const [details,setDetails]=useState({name:'',email:'',password:'',address:''})
    let navigate=useNavigate()
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/createuser',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:details.name,email:details.email,password:details.password,location:details.address})
        })
        
        const json=await response.json()
        console.log(json)
        navigate('/')
        if(!json.success){
            alert('Enter Valid Information')
        }
        // .then(async (response)=>{
        //     const json=await response.json()
        //     if(!json.success){
        //         alert('Enter Valid Details')
        //     }
        // })
    }


    const onChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})
    }
    return (
        <div className="container">
            <div>
                <form onSubmit={HandleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input id="name" className="form-control"  name='name' value={details.name} onChange={onChange} autoComplete="off" />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={details.email} onChange={onChange} autoComplete="off" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={details.password} onChange={onChange} autoComplete="off"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='address' value={details.address} onChange={onChange} autoComplete="off" />
                    </div>
                    
                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to='/login' className="m-3 btn btn-danger">Already a user?</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;