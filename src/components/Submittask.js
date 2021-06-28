

const Submittask = () => {
    return (
        <div className="submittask-body">
            <form className="submittask-form" action="">
                <div className="submittask-header">
                <img className="submittask-logo"src="/image/givetask.png" alt="home"/>
                    <p className="head-title"> Submit task</p>      
                </div>
                <div>
                    <input className="submittask-input" type="text" name="subject" placeholder="Subject" />
                </div>
                <div>
                    <input className="submittask-input" type="text" name="topic" placeholder="Topic" />
                </div>
                <div>
                    <input className="submittask-input" type="date" name="givendate"/>
                </div>
                <div>
                    <input className="submittask-input" type="date" name="submitdate"/>
                </div>
                <div>
                    <input className="submittask-input" type="file" name="submitfile"/>
                </div>
                <div>
                    <button className="submittask-button" type="submit">Add Task</button>
                </div>
        </form>
        
    </div>
    )
}

export default Submittask
