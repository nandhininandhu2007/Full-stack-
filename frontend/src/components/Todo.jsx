import React from 'react'
import { useState } from 'react'


const Todo = () => {
    const[todos,setTodos] = useState([
        {
            task:"Read",
            completed:false
        }
    ])
    const [task,setTask] = useState("");
  return (
    <div>
        <form>
            <label>Task :</label>
            <input type="text" />
        </form>
        <ul>
            {todos.map((todo,index)=>(
                <div>
                    <li key={index}>{todo.task}</li>
                </div>

            ))}
        </ul>
      todo
    </div>
  )
}

export default Todo
