import { useState } from "react";
 
const TodoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {setToDo(e.target.value)}
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo == "") return;
    setToDos((currentArray)=> ([toDo,...currentArray])); 
    setToDo("")
  }
  return (
    <div>
      <form action="#" onSubmit={onSubmit}>   
        <h1>to do ({toDos.length}) : {toDo}</h1>
        {/* <h1>to dos ({toDos.length}) : {toDos}</h1> */}
        <input type="text" value={toDo} placeholder="Write your to do..." onChange={onChange}/>
        <button>add to do</button>  
      </form>
      <hr />
      <ul>
        {toDos.map((i,idx)=> <li key={idx}>{i}</li>)}
      </ul>
    </div>
  );
};

export default TodoList;