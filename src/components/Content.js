
import { useState } from 'react';
import {Link} from 'react-router-dom';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleClick = () => {
        setIsOpen(!isOpen);
    }

    // const history = useHistory();

    // const viewClick = () => {
    //     history.push('/')
    // }
    return ( 
        <div className="content">
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-items"><Link to="/" onClick={toggleClick}><img src="/image/user.png" alt="home" className="icons"></img> </Link> </li>
                    <li className="nav-items"><Link to="/"><img src= "/image/vcall.png" alt="home" className="icons"></img></Link></li>
                    <li className="nav-items">
                        <Link to="/"><img src="/image/pcall.png" alt="home" className="icons"></img></Link>
                        <div className={!isOpen ? "dropdown-content" : "dropdown-content-active"}>
                                <div>
                                   <Link to="/"><img src="/image/user.png" className="user-profile-icons" alt="home"></img>
                                    <p> View Profile</p></Link>
                                </div>
                                <div>
                                
                                    <Link to="/"><img src= "/image/logout.png" alt="home" className="user-profile-icons"></img> 
                                    <p>Log Out</p> </Link>
                                
                                    </div>    
                        </div>
                        </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Content;