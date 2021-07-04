import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
 

const Signup = () => {
   
    const history =useHistory();

    const [first_name ,setFirst] =useState("")
    const [last_name, setLast] =useState("")
    const [role ,setRole] =useState("")
    const [email, setEmail] =useState("")
    const [password , setPassword] = useState("")
    const [confirm_password ,setConfirm] =useState("")

    async function register(){
        let set = {first_name, last_name , role, email , password ,confirm_password}
    
        let sign = await fetch("http://127.0.0.1:8000/api/sign",{
            method:'POST',
            body:JSON.stringify(set),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        sign = await sign.json();
        localStorage.setItem("user-info",JSON.stringify(sign));
        history.push('/');
        
    }
    return (
        <div className="signup">
            <form className="signup-form" action="">
                    <div >
                        <input type="text" className="signup-input" value={first_name} onChange={(e)=>setFirst(e.target.value)} placeholder="First Name"  required/>
                    </div>
                    <div >
                        <input type="text" className="signup-input" value={last_name} onChange={(e)=>setLast(e.target.value)} placeholder="Last Name" required/>
                    </div>
                    <div >
                        <input type="text" className="signup-input" value={role} onChange={(e)=>setRole(e.target.value)} placeholder="Role"  required/>
                    </div>
                    <div >
                        <input type="email" className="signup-input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
                    </div>
                    <div >
                        <input type="password" className="signup-input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
                    </div>
                    <div >
                        <input type="password" className="signup-input" value={confirm_password} onChange={(e)=>setConfirm(e.target.value)} placeholder="Confirm Password" required/>
                    </div>   
                </form>
                    <div>
                        <button onClick={register} className="signup-button">Signup</button>
                    </div>
        </div>
    )
}

export default Signup
