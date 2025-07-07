function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("براہ کرم کام لکھیں");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // ✅ مکمل ہونے پر لائن لگانے والا فنکشن
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // ❌ ختم کرنے کا بٹن
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
