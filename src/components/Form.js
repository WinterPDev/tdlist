import React, { useState } from 'react';

const Form = (props) => {
    const [tasklist, setTasklist] = useState([]);
    const [task, setTask] = useState({tasktext: "", checked: false});

    const changeHandler = (iTarget) => {
        const checkedTasks = tasklist.map((task, i) => {
            if(iTarget == i){
                // task.checked = !task.checked;
                const updatedTask = { ...task, checked: !task.checked };
                return updatedTask;
            }

            return task;
        })

        setTasklist(checkedTasks);
    }

    const deleteTaskHandler = (iTarget) => {
        const filteredTasks = tasklist.filter((task, i) => {
            return i != iTarget;
        });
        setTasklist(filteredTasks);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTasklist([...tasklist, task])
        setTask({tasktext: "", checked: false});
    }


    return (
        <div>
            <form onSubmit={(e) => {submitHandler(e)}}>
                <input type="text" name="task" onChange={(e) => setTask({tasktext: e.target.value, checked: false})} value={task.tasktext}/>
                <div>
                    <button type="submit" value="Add Task">Add Task</button>
                </div>
            </form>

            <div>
                {
                    tasklist.map((task, i) => {
                        return (
                            <p key={i} style={task.checked ? { textDecoration: "line-through" } : {}}>{task.tasktext} | <input type="checkbox" onChange={(e) => {changeHandler(i);}} checked={task.checked} />
                                <button onClick={(e) => {deleteTaskHandler(i);}}> Delete </button>
                            </p>
                        );
                    })
                }
            </div>
        </div>


    )
}

export default Form;