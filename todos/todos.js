const formTodo = document.querySelector('#form-todos');
const formInput = document.querySelector('#form-input');
const todosList = document.querySelector('#todos-list');

const user = JSON.parse(localStorage.getItem('user'));
console.log(user);

formTodo.addEventListener('submit', async e => {
    e.preventDefault();
    await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: formInput.value, user: user.username}),
    });

    //Crear la lista de tareas en el HTML
    const listItem = document.createElement('li');
    
});