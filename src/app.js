var toDoList = document.querySelector('ul');
    fetch('https://api.myjson.com/bins/9l2ez')
    .then(function(response) { return response.json(); })
    .then(function(data) {
        for(var i = 0; i < data.todos.length; i++) {
        var listTask = document.createElement('li');
        listTask.innerHTML = data.todos[i].label;
        toDoList.appendChild(listTask);
      }
        toDoList.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.toggle('checked');
        }
      });
    });
