function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  if (taskInput.value === '') {
    alert('Please enter a task.');
    return;
  }

  var li = document.createElement('li');
  li.innerHTML = '<span class="square" onclick="toggleComplete(this)"></span>' + taskInput.value + ' <button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
  taskList.appendChild(li);

  taskInput.value = '';
}

function deleteTask(btn) {
  var li = btn.parentNode;
  var ul = li.parentNode;
  ul.removeChild(li);
}

function toggleComplete(span) {
  var li = span.parentNode;
  li.classList.toggle('complete');
}

function clearList() {
  var taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
}