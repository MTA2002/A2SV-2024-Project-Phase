btn = document.getElementById("btn");
task = document.getElementById("task");
tasks = document.getElementById("tasks");

displayTasks();

btn.addEventListener("click", () => {
  if (localStorage.getItem("task-count") == null) {
    let count = 1;
    localStorage.setItem("task-count", count.toString());
  }
  if (task.value.length > 0) {
    let task_count = Number(localStorage.getItem("task-count"));
    task_count += 1;
    localStorage.setItem("task-count", task_count.toString());
    localStorage.setItem("task" + task_count.toString(), task.value);
    task.value = "";
    displayTasks();
  }
});

function displayTasks() {
  if (localStorage.getItem("task-count") == null) {
    let count = 0;
    localStorage.setItem("task-count", count.toString());
  }
  tasks.innerHTML = "";
  for (let i = 0; i <= Number(localStorage.getItem("task-count")); i++) {
    console.log(localStorage.getItem("task" + i.toString()));
    if (localStorage.getItem("task" + i.toString()) != null) {
      const task = localStorage.getItem("task" + i.toString());
      const task_div = document.createElement("div");
      const content_paragraph = document.createElement("p");
      const edit_btn = document.createElement("button");
      const delete_btn = document.createElement("button");
      edit_btn.className = "edit-btn";
      delete_btn.className = "delete-btn";
      edit_btn.appendChild(document.createTextNode("Edit"));
      delete_btn.appendChild(document.createTextNode("Delete"));
      task_div.className = "task-div";
      content_paragraph.className = "content_paragraph";
      content_paragraph.style.marginRight = "20px";
      edit_btn.style.marginRight = "20px";
      edit_btn.addEventListener("click", () => {
        let edited_content = prompt(
          "Enter the modified to-do?",
          localStorage.getItem("task" + i.toString())
        );
        edit_btn.parentElement.childNodes[0].innerHTML = edited_content;
        localStorage.setItem("task" + i.toString(), edited_content);
      });
      delete_btn.addEventListener("click", () => {
        delete_btn.parentElement.remove();
        localStorage.removeItem("task" + i.toString());
      });
      content_paragraph.appendChild(document.createTextNode(task));
      task_div.appendChild(content_paragraph);
      task_div.appendChild(edit_btn);
      task_div.appendChild(delete_btn);
      tasks.appendChild(task_div);
    }
  }
}
