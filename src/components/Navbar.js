import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleClick = () => {
        setIsOpen(!isOpen);
    }
    return ( 
        <div className="navbar">
            <div className="image-div">
                <Link to="/"><img src= "/image/book.png" alt="Project" className="header"/> </Link>
            </div>
            <div className="list-items">
                <ul className="dash-list">
                    <li className="dash-items" ><Link to="/" className="header"><img src="/image/dashboard.png" alt="home" className="icons"></img> Dashboard </Link></li>
                    <li className="dash-items">
                        <Link to="/givetask" className="header"><img src= "/image/stopwatch.png" alt="home" className="icons"></img> Give Task </Link></li>
                    <li className="dash-items" ><Link to="/viewtask" className="header"><img src= "/image/clipboard.png" alt="home" className="icons"></img> View Task </Link></li>
                    <li className="dash-items"><Link to="/submittask"  className="header"><img src= "/image/file.png" alt="home" className="icons"></img> Submit Task </Link></li>
                    <li className="dash-items">
                        <Link to="/handletask"className="header">
                            <img src= "/image/checklist.png" alt="home" className="icons"></img> Handed Tasks 
                        </Link>
                    </li>
                    <li className="dash-items"><Link to="/" className="header"><img src= "/image/comment.png" alt="home" className="icons"></img> Review </Link></li>
                    <li className="dash-items">
                        <button className="dropdown" onClick={toggleClick}><img src= "/image/user.png" alt="home" className="icons"></img> Users <FontAwesomeIcon icon={faCaretDown} />
                        <div className={!isOpen ? "content" : "content-active"}>
                            <Link to="/"><img src= "/image/tutor.png" alt="home" className="icons"></img> Teacher</Link><br></br>
                            <Link to="/"><img src= "/image/student.png" alt="home" className="icons"></img> Student</Link>
                        </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;