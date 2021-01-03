// Todolist
let todos = [
  { id: 1, title: "Coding", completed: false },
  { id: 2, title: "Xem bắn pháo hoa", completed: false },
  { id: 3, title: "Giao bài tập lớp FE12", completed: true},
  { id: 4, title: "Đòi nợ Thảo 10$", completed: false },
  { id: 5, title: "Dọn nhà", completed: true },
  // add more
  { id: 6, title: "Đi gym", completed: true },
  { id: 7, title: "Đi học nhảy", completed: false},
  { id: 8, title: "Đi học đàn", completed: false },
];

// Từ todolist trên render ra trang HTML theo mẫu trong ảnh
let notCompleted = document.querySelector(".pending");
let completed = document.querySelector(".done");
for (let i = 0; i < todos.length; i++){
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  let label = document.createElement("label"); 
  check.id = todos[i].id;
  check.dataset.title = todos[i].title;
  label.setAttribute("for",check.id)
  label.innerHTML = `${todos[i].title}<br>`; 
  if (todos[i].completed) {
    check.setAttribute("checked","checked")
    completed.appendChild(check);
    completed.appendChild(label); 
  }
  else {
    notCompleted.appendChild(check);
    notCompleted.appendChild(label);
  }
}
