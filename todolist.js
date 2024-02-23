document.getElementById("addTaskBtn").addEventListener("click", function() {
  var input = document.getElementById("taskInput").value;
  if (input.trim() !== '') {
    var li = document.createElement("li");
    li.textContent = input;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = '';
  }
});

