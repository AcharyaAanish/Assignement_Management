
import {Link , useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    // constructor(props){
    //     super(props)
    //     this.state= {
    //         email :null,
    //         password:null
    //     }
    // }

    const toogleDashboard =() =>{
       
        history.push('/dashboard');
       
    }
    const toogleForget = () => {
       history.push('/forget');
    } 
    return (
        <div className="login">
            <form className="login-form" onSubmit={toogleDashboard}>
            <div className="login-contain">
                    <input type="text" className="login-input" placeholder="Role" id="role" required/>
                </div>
                <div className="login-contain">
                    <input type="email" className="login-input" placeholder="Email" id="email" required/>
                </div>
                <div className="login-contain">
                    <input type="password" className="login-input" placeholder="Password" id="password" required/>
                </div>
                <div className="login-contain">
                    <input type="checkbox" class="login-check"/>
                    <label className="login-remeber">Remember Me</label>
                </div>
                <div className="login-contain">
                   
                    <button className="login-button"  >Login</button>
                  
                </div>
                <Link to="/forget" onClick={toogleForget}>Forget?</Link>
            </form>
        </div>
    )
}

export default Login
