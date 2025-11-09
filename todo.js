let todolist=[
  {item:'buy milk',
  duedate:'4/5/2023'},

  {item:'go to college',
  duedate:'4/5/2023'}];

displayitems();

function todoapp(){
  let entered=document.querySelector("#todoenter");
  let dateelement=document.querySelector("#todo-date");
  let inputitem=entered.value;
  let todoitem=dateelement.value;
  todolist.push({item:inputitem,
                duedate:todoitem,
  }

  );
  entered.value='';
  dateelement.value='';
  displayitems();
}

function displayitems(){
  
  let containerelement=document.querySelector('.todo-container');
 
  let newhtlml='';

  for(let i=0;i<todolist.length;i++){
    let items=todolist[i].item;
    let duedate=todolist[i].duedate;
    newhtlml+=`
    <span>${items}</span>
    <span>${duedate}</span>
    <button  class="btn-delete" onclick="todolist.splice(${i},1);
    displayitems()";
    >Delete</button>
    `;

  }
  containerelement.innerHTML=newhtlml;
}