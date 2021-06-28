import React ,{useState} from 'react'
import { useHistory } from 'react-router'

const Givetask = () => {
    const history = useHistory();

    const [subject_name,setName] =useState("")
    const [topic,setTopic] =useState("")
    const [given_time ,setGiven] = useState("")
    const [submit_time,setSubmit] = useState("")
    const [file,setFile] = useState("")

   async function store(){
        let item ={subject_name,topic,given_time,submit_time,file}
        // console.warn(item)
        
        let result = await fetch("http://127.0.0.1:8000/api/given",
        {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        // result = await result.json()
        history.push('/viewtask');
    }

    return (
            <div className="givetask-body">
                <form className="givetask-form" action="">
                    <div className="form-header">
                        
                        <img className="form-logo"src="/image/givetask.png" alt="givetask"/>
                        <p className="header-title">Give Assignment</p>
                    </div>
                    <div>
                    <input  className="card-input" value={subject_name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Subject Name" required/>
                    </div>
                    <div>
                        <input  className="card-input" value={topic} onChange={(e)=>setTopic(e.target.value)} type="text"  placeholder="Topic" required/>
                    </div>
                    <div>
                        <input  className="card-input" value={given_time} onChange={(e)=>setGiven(e.target.value)} type="date" placeholder="Given Date" required/>
                    </div>
                    <div>
                        <input  className="card-input" value={submit_time} onChange={(e)=>setSubmit(e.target.value)} type="date"  placeholder="Submission Date" required/>
                    </div>
                    <div>    
                        <input  className="card-input" value={file} onChange={(e)=>setFile(e.target.value)} type="file" placeholder="File" required/>
                    </div>
                </form>
                <div>
                        <button onClick={store} className="btn card-button" >Add</button>
                </div>
                
            </div>
    )
}

export default Givetask
