import React from 'react';
import {useHistory} from 'react-router-dom'
const Forget = () => {
    const history = useHistory();

    const toogleForget = () =>{
        history.push('/login');
    }
    return (
        <div className="forget-password">
            <form className="forget-form" onSubmit={toogleForget}>
                <div className="forget-label">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="forget-input" placeholder="Email" id="email" required/>
                </div>
                <div>
                    <button className="forget-button">Submit</button>
                </div>
            </form>
            
        </div>
    )
}

export default Forget
