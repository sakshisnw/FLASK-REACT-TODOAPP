import React from 'react';

function TodoItems({ todo }) {
    return ( <
        li >
        <
        h3 > { todo.title } < /h3> <
        p > { todo.description } < /p> <
        p > { todo.time } < /p> <
        img src = { todo.image }
        alt = { todo.title }
        /> <
        /li>
    );
}

export default TodoItems;