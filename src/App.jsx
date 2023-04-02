import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck, faPen, faT, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './app.css'



const App = () => {
    //tasks

    const [toDo, setToDo] = useState([
        // { id: 1, "title": "Task 1", "status": false },
        // { id: 2, "title": "Task 2", "status": false }
    ])


    // these are temp states


    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');


    //functions for diff tasks

    //add task

    const addTask = () => {
        if (newTask) {
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newTask, status: false };
            setToDo([...toDo, newEntry]);
            setNewTask('');
        }

    }

    //delete task

    const deleteTask = (id) => {
        let newTask = toDo.filter(task => task.id != id);   // this method update the toDo array without the id that matches the delete button 
        setToDo(newTask);


    }

    //completed task

    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setToDo(newTask);
    }

    //cancel update

    const cancelUpdate = () => {
        setUpdateData('');
    }

    //change task for update

    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry);

    }

    //update task

    const updateTask = () => {
        let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
        let updatedobject = [...filterRecords, updateData];
        setToDo(updatedobject);
        setUpdateData('');
    }






    return (
        <div className='container app'>
            <br></br>
            <h2>To Do List App(React)</h2>

            {/* //update Task */}

            {updateData && updateData ? (
                <>

                    <div className="row">
                        <div className="col">
                            <input value={updateData && updateData.title}
                                onChange={(e) => changeTask(e)}
                                type="text" className="form-control form-control-lg" />
                        </div>
                        <div className="col-auto">
                            <button onClick={updateTask}
                                className="btn btn-large btn-success mr-20">
                                Update
                            </button>
                            <button onClick={() => cancelUpdate()}
                            className="btn btn-large btn-warning">
                                Cancel
                            </button>
                        </div>
                    </div>
                    <br></br>
                </>
            ) : (

                <>
                    {/* // Add a task */}

                    <div className="row">
                        <div className="col">
                            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}
                                className="form-control form-control-lg" />
                        </div>
                        <div className="col-auto">
                            <button onClick={addTask}
                                className="btn btn-lg btn-success">
                                Add Task
                            </button>
                        </div>
                    </div>
                    <br></br>
                </>

            )}






            {/*Display ToDos */}



            {toDo && toDo.length ? '' : 'No Tasks'}
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1) //this sort function is to make sure task 1 appear first
                .map((task, index) => (
                    <React.Fragment key={task.id}>
                        <div className="col taskBg">
                            <div className={task.status ? 'done' : ''}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.title}</span>

                            </div>
                            <div className="iconsWrap">
                                <span title="Completed / Not Completed"
                                    onClick={(e) => markDone(task.id)}
                                ><FontAwesomeIcon icon={faCircleCheck} /></span>

                                {task.status ? null : (
                                    <span title="Edit"
                                        onClick={() => setUpdateData({
                                            id: task.id,
                                            title: task.title,
                                            status: task.status ? true : false
                                        })}
                                    ><FontAwesomeIcon icon={faPen} /></span>
                                )}

                                <span onClick={() => deleteTask(task.id)}
                                    title="Delete"><FontAwesomeIcon icon={faTrashCan} /></span>
                            </div>
                        </div>




                    </React.Fragment>

                )
                )}
        </div>
    )
}

export default App;