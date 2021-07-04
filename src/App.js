import './App.css';
import './csss/Content.css'
import './csss/Navbar.css'
import './csss/Login.css'
import './csss/Signup.css'
import './csss/Forget.css'
import './csss/Change.css'
import './csss/Givetask.css'
import './csss/Submittask.css'
import './csss/Viewtask.css'
import './csss/Handletask.css'
import Content from './components/Content.js';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Forget from './components/Forget.js';
import Change from './components/Change.js';
import Givetask from './components/Givetask.js';
import Submittask from './components/Submittask.js';
import Viewtask from './components/Viewtask.js';
import Handletask from './components/Handletask.js';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar  />
        <Content />
        {/* <Login/> */}
        
      <Switch>
       
        
        
        {/* Wrapping the multiple component into the single function */}
        {/* <Route path="/dashboard" render={ props =>
        <div>
          <Navbar/>
          <Content/>
        </div>

        }/> */}
        <Route path="/givetask" component={Givetask} />
        <Route path="/submittask" component={Submittask} />
        <Route path="/forget" component={Forget} /> 
        <Route path="/change" component={Change} />
        <Route path="/signup" component= {Signup} />
        <Route path="/viewtask" component ={Viewtask} />
        <Route path="/handletask" component={Handletask} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;