const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = text;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  const btnBox = document.createElement("div");
  btnBox.appendChild(completeBtn);
  btnBox.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnBox);
  taskList.appendChild(li);

  taskInput.value = "";
}
