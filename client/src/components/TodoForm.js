import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { title, description, time, image };
        addTodo(newTodo);
        setTitle('');
        setDescription('');
        setTime('');
        setImage('');
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { title }
        onChange = {
            (e) => setTitle(e.target.value) }
        placeholder = "Title" /
        >
        <
        textarea value = { description }
        onChange = {
            (e) => setDescription(e.target.value) }
        placeholder = "Description" /
        >
        <
        input type = "text"
        value = { time }
        onChange = {
            (e) => setTime(e.target.value) }
        placeholder = "Time" /
        >
        <
        input type = "text"
        value = { image }
        onChange = {
            (e) => setImage(e.target.value) }
        placeholder = "Image URL" /
        >
        <
        button type = "submit" > Add Todo < /button> <
        /form>
    );
}

export default TodoForm;