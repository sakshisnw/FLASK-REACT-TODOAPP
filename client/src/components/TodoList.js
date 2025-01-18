import React from 'react';
import TodoItems from './TodoItems';

function TodoList({ todos }) {
    return ( <
        ul > {
            todos.map((todo) => ( <
                TodoItems key = { todo.id }
                todo = { todo }
                />
            ))
        } <
        /ul>
    );
}

export default TodoList;