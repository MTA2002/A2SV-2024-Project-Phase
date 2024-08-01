var btn = document.getElementById("btn");
var task = document.getElementById("task");
var tasks = document.getElementById("tasks");
displayTasks();
btn === null || btn === void 0
  ? void 0
  : btn.addEventListener("click", function () {
      if (localStorage.getItem("task-count") == null) {
        var count = 1;
        localStorage.setItem("task-count", count.toString());
      }
      if (task.value.length > 0) {
        var task_count = Number(localStorage.getItem("task-count"));
        task_count += 1;
        localStorage.setItem("task-count", task_count.toString());
        localStorage.setItem("task" + task_count.toString(), task.value);
        task.value = "";
        displayTasks();
      }
    });
function displayTasks() {
  if (localStorage.getItem("task-count") == null) {
    var count = 0;
    localStorage.setItem("task-count", count.toString());
  }
  tasks.innerHTML = "";
  var _loop_1 = function (i) {
    console.log(localStorage.getItem("task" + i.toString()));
    if (localStorage.getItem("task" + i.toString()) != null) {
      var task_1 = localStorage.getItem("task" + i.toString());
      var task_div = document.createElement("div");
      var content_paragraph = document.createElement("p");
      var edit_btn_1 = document.createElement("button");
      var delete_btn_1 = document.createElement("button");
      edit_btn_1.className = "edit-btn";
      delete_btn_1.className = "delete-btn";
      edit_btn_1.appendChild(document.createTextNode("Edit"));
      delete_btn_1.appendChild(document.createTextNode("Delete"));
      task_div.className = "task-div";
      content_paragraph.className = "content_paragraph";
      content_paragraph.style.marginRight = "20px";
      edit_btn_1.style.marginRight = "20px";
      edit_btn_1.addEventListener("click", function () {
        var edited_content = prompt("Enter the modified to-do?");
        edit_btn_1.parentElement.childNodes[0].textContent = edited_content;
        localStorage.setItem("task" + i.toString(), edited_content);
      });
      delete_btn_1.addEventListener("click", function () {
        delete_btn_1.parentElement.remove();
        localStorage.removeItem("task" + i.toString());
      });
      content_paragraph.appendChild(document.createTextNode(task_1));
      task_div.appendChild(content_paragraph);
      task_div.appendChild(edit_btn_1);
      task_div.appendChild(delete_btn_1);
      tasks.appendChild(task_div);
    }
  };
  for (var i = 0; i <= Number(localStorage.getItem("task-count")); i++) {
    _loop_1(i);
  }
}
