
function TaskSaver() {
let task = document.getElementById('myInput').value;
  let words = localStorage.getItem("taskList");
  localStorage.setItem("taskList", words + "\n" + task);
  var taskList = document.getElementById("tasklist");
  taskList.value = localStorage.taskList;
  document.getElementById('myInput').value = null;
}
function TaskClear() {
  document.getElementById('myInput').value = null;
  window.localStorage.clear();
  location.reload();
}