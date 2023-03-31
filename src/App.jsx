import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCircleCheck , faPen , faT, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './app.css'



const App = () =>{
    //tasks

    const [toDo,setToDo]=useState([
        {id : 1, "title": "Task 1", "status": false},
        {id : 2, "title": "Task 2", "status": false}
    ])


    const [newTask , setNewTask] = useState('');
    const [updateData, setUpdateData]= useState('');


    //functions for diff tasks

    //add task

    const addTask = ()=> {

    }

     //delete task

     const deleteTask= (id)=>{
        
     }

      //completed task

    const markDone= (id)=>{
        
    }

     //cancel update

     const cancelUpdate= ()=>{
        
     }
 
      //change task for update

    const changeTask= (e)=>{
        
    }

     //update task

     const updateTask= ()=>{
        
     }
 


 


    return(
        <div className='container app'> 
            <br></br>
            <h2>To Do List App(React)</h2>

            {/*Display ToDos */}

            

            {toDo && toDo.length ? '' : 'No Tasks'}  
            {toDo && toDo.map((task ,index)=>(
                <React.Fragment key={task.id}>
                <div className="col taskBg">
                    <div className={task.status ?'done' :''}>
                        <span className='taskNumber'>{index + 1}</span>
                        <span className='taskText'>{task.title}</span>

                    </div>
                    <div className="iconsWrap">
                        <span><FontAwesomeIcon icon = {faCircleCheck}/></span>
                        <span><FontAwesomeIcon icon = {faPen}/></span>
                        <span><FontAwesomeIcon icon = {faTrashCan}/></span>
                    </div>
                </div>



               
                </React.Fragment>
                
            )
            )}
        </div>
    )
}

export default App;