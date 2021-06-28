import React from 'react';
import {useHistory} from 'react-router-dom' 

const Signup = () => {
    const history = useHistory();

    const toogleSignup = () =>{
        history.push('/login');
    }
    return (
        <div className="signup">
            <form className="signup-form" onSubmit={toogleSignup}>
                    <div className="signup-label">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="signup-input" placeholder="First Name" id="firsname" required/>
                    </div>
                    <div className="signup-label">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="signup-input" placeholder="Last Name" id="lastname" required/>
                    </div>
                    <div className="signup-label">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="signup-input" placeholder="Email" id="email"required/>
                    </div>
                    <div className="signup-label">
                        <label htmlFor="password">Password</label> 
                        <input type="password" className="signup-input" placeholder="Password" id="password"required/>
                    </div>
                    <div className="signup-label">
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="password" className="signup-input" placeholder="Confirm Password" id="confirmpassword" required/>
                    </div>
                    <div>
                        <button className="signup-button">Signup</button>
                    </div>
            </form>
        </div>
    )
}

export default Signup
