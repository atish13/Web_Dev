


 let todos = [];
 
 var todolist=document.querySelector("#todo-list");

  function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => { 
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
        <input type="checkbox" onchange="toggleTodo(${index})" ${todo.completed ? 'checked' : ''}>
        <span>${todo.text}</span>
        <button onclick="removeTodo(${index})">Remove</button>
      `;
      todoList.appendChild(todoItem);
    });
  }

  function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const text = todoInput.value.trim();
    if (text !== '') {
      todos.push({ text, completed: false });
      todoInput.value = '';
      renderTodos();
    }
  }

  function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
  }

  function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }


  function searchV()
  {
    var v=document.querySelector("#todo-search").value;
    // console.log(v);
    // var n=todos;
   todos.filter((item)=>{
    // if(v==item)
    // {
    //   alert("founded");
    // }
    if(item.text==v)
    {
      alert("available");
    }
   })
    

  }