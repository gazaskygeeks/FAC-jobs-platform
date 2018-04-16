(function () {
  const container = document.getElementById('todo-container');
  const containerDone = document.getElementById('done-container');
  const addTodoForm = document.getElementById('add-todo');
  const addTodoInput = document.getElementsByName('description')[0];

  let state = JSON.parse(localStorage.getItem('state')) || [];

  const createTodoNode = function (todo, checked) {
    const todoNode = document.createElement('li');
    todoNode.id = todo.id;

    // you will need to use addEventListener

    const span = document.createElement('span');
    span.textContent = todo.description;

    const deleteButtonNode = document.createElement('button');
    const icon = document.createElement('i');
    icon.addEventListener('click', event => {
      const newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    icon.className = 'fa fa-trash iconStyle';

    const markButtonNode = document.createElement('input');
    markButtonNode.setAttribute('type', 'checkbox');
    if (checked) {
      markButtonNode.setAttribute('checked', 'true');

    }
    markButtonNode.addEventListener('click', event => {
      const newState3 = todoFunctions.markTodo(state, todo.id);
      update(newState3);
    });

    todoNode.appendChild(span);
    todoNode.insertBefore(markButtonNode, todoNode.firstChild);
    todoNode.appendChild(icon);

    // Edit buttoon

    const editButton = document.createElement('button');
    const editIcon = document.createElement('i');
    const editInput = document.createElement('input');

    editButton.id = 'edit';
    editIcon.className = 'fa fa-pencil iconStyle';
    editButton.appendChild(editIcon);
    editButton.className = 'edit';
    todoNode.appendChild(editButton);
    editInput.autofocus = true;

    editButton.addEventListener('click', e => {
      // update(state);
      if (e.target.id === 'edit') {
        editInput.value = span.textContent;
        todoNode.insertBefore(editInput, span);
        span.classList.add('hidden');
        editButton.id = 'save';
        editIcon.className = 'fa fa-check iconStyle';

      } else if (e.target.id === 'save') {
        editInput.autofocus = true;
        const newState = todoFunctions.editTodo(state, e.target.parentNode.getAttribute('id'), editInput.value);
        todoNode.removeChild(editInput);
        update(newState);
        // editButton.id = 'edit';
      }
    });

    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', event => {

      event.preventDefault();

      const description = event.target.description.value;
      if (description.trim().length>0) {
        const newState = todoFunctions.addTodo(state, description);
        update(newState);
        event.target.description.value = '';

      } else {
        alert('Enter todo');
      }
    });
  }

  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function (state) {
    const todoListNode = document.createElement('ul');
    const todoListNode2 = document.createElement('ul');
    todoListNode2.className = 'done_i';

    localStorage.setItem('state', JSON.stringify(state));

    state.forEach(todo => {
      if (!todo.done) {
        todoListNode.appendChild(createTodoNode(todo, false));
      } else {
        todoListNode2.appendChild(createTodoNode(todo, true));

      }
    });

    container.replaceChild(todoListNode, container.firstElementChild);
    containerDone.replaceChild(todoListNode2, containerDone.firstElementChild);
  };

  if (container) renderState(state);
})();
