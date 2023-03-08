import React from 'react'
import FormAdd from './FormAdd'
import { useGetTodosQuery } from '../app/features/apiSlice'
import TodoItem from './TodoItem'

const Todolist = () => {
    const {data, isLoading, isSuccess} = useGetTodosQuery()
  return (
    <div>
        <FormAdd/>
        {isLoading && <div>Loading...</div>}
        <ul>
                
            {isSuccess && data.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            }).reverse()
            }
          
        </ul>
    </div>
  )
}

export default Todolist