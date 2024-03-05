import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Todoform from './Todoform';

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        updateTodo(edit.id,value)
        setEdit({
            id: null,
            value: ""
        })
    }
    if(edit.id){
        return <Todoform edit={edit} onSubmit ={submitUpdate} />
    }


  return todos.map((todo,index) => (
    <div className={todo.isComplete ? 'todo-row completed' : 'todo-row' }key={index}>
        <div className={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
        <div className='icon'>
            <RiCloseCircleLine onClick={() => removeTodo(todo.id) } className='delete-icon'/>
            <TiEdit onClick={() => setEdit({id: todo.id,value: todo.text})} className='edit-icon' />
        </div>
    </div>
  ))
}

export default Todo
