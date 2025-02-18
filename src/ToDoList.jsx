import { useState } from "react"

function ToDoList(){

    const [tasks, setTasks] = useState(["eat", "walk", "sleep"]);
    const [newTask, setNewTask] = useState("");
    
    function inputchange(event){
        setNewTask(event.target.value);

    }

    function addtask(){
        if(newTask.trim()=== "") return;
            setTasks(t => [...t, newTask]);
            setNewTask("")

        }     
    

    function deletetask(index){
        const updatedTasks = tasks.filter((_, i) => i != index)
        setTasks(updatedTasks);
    }

    function movetaskup(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function movetaskdown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" value={newTask} placeholder="Enter a task"
            onChange={inputchange} />
            <button className="add-button" onClick={addtask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete" onClick={deletetask(index)}>Delete
                </button>
                <button className="move-buttton" onClick={movetaskup(index)}>Up
                </button>
                <button className="move-button" onClick={movetaskdown(index)}>Down
                </button>
                </li>
            )}
        </ol>
        </div>); 

}
export default ToDoList