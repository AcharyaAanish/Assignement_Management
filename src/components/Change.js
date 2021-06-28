import React from 'react';
import { useHistory} from 'react-router-dom'

const Change = () => {
    const history = useHistory();
    const toogleChange = () =>{
        history.push('/login');
    }
    return (
        <div className="change-password">
            <form className="change-form" onSubmit={toogleChange}>
                <div className="change-label">
                    <label htmlFor="password">New Password</label>
                    <input type="password" className="change-input" placeholder="New Password" id="newpassword" required/>
                </div>
                <div className="change-label">
                    <label htmlFor="confirmpassword">Confirm Password </label>
                    <input type="password" className="change-input" placeholder="Confirm Password" id="confirmpassword" required/>
                </div>
                <div>
                    <button className="change-button" >Change Password</button>
                </div>
            </form>
        </div>
    )
}

export default Change
