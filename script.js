let toDos = [];
const btn = document.querySelector("#add");
const lista = document.querySelector("#list");

function toDoDones(){
  let toDosDone = toDos.filter((toDo) => toDo.done == true);
  console.log('a');
  document.querySelector(
    "#done"
  ).innerHTML = `Tareas Completadas: ${toDosDone.length}`;
};

const refresh = (id) => {
  let taskIndex = toDos.findIndex((task) => task.id === id);
  console.log("refreshhh", id);
  // toDos.splice(taskIndex, 1)
  toDos[taskIndex].done = !toDos[taskIndex].done;
  toDoDones();
};

const eliminar = (id) => {
  let toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
  toDos.splice(toDoIndex, 1);
  actual_toDo();
  toDoDones();
};

const actual_toDo = () => {
  let html = "";
  toDos.forEach((toDo) => {
    console.log(toDo.done);
    html += `<li class='row'> <div class='listBit col-3 ${toDo.done == true ? `green` : `red` }'>${toDo.id}</div>
        <div class='listBit col-3'>${toDo.name}</div>
        <div class='listBit col-3'><i onclick='eliminar(${
          toDo.id
        })' class=" trash fa-solid fa-trash"></i></div>
        <div class='listBit col-3'><input type='checkbox' onclick='refresh(${
          toDo.id
        }), actual_toDo()' ${toDo.done === true ? 'checked' : null}></div>
         </li>`;
  });
  document.querySelector(
    "#total"
  ).innerHTML = `Tareas Totales: ${toDos.length}`;
  lista.innerHTML = html;
};

btn.addEventListener("click", () => {
  let value = document.querySelector("input").value;
  let new_task = {
    id: Date.now(),
    name: value,
    done: false,
  };
  toDos.push(new_task);
  actual_toDo();
});
