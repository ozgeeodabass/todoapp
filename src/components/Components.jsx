import {useState} from 'react'

//components
import Form from "./Form/Form";
import List from "./List/List";
import Footer from "./Footer/Footer";

function Components() {
  //array state for our data
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );


  const [hide, setHide] = useState("All");

  return (
    <div className='todoapp'>

      <Form todos={todos} setTodos={setTodos}/>
      {/* <List todos={todos} setTodos={setTodos} hide={hide}/>
      <Footer todos={todos} setTodos={setTodos} setHide ={setHide}/> */}
      
    </div>
  )
}

export default Components;
