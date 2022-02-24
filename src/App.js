import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, updateText] = useState("");
  const [todos, updatetodos] = useState([]);
  // const [status,updateStatus]=useState(false)
  const addtodo = () => updatetodos([...todos, { text: text, status: false }]);
  const takeActivity = (e) => updateText(e.target.value);
  const changeStatus = (item, index) => {
    console.log(todos, "before updating");
    let newArray = [...todos];
    newArray[index].status = !item.status;
    updatetodos(newArray);
  };

  console.log("todos during render", todos);

  return (
    <div className="App">
      <h1>add todos </h1>
      <input type="text" onChange={takeActivity} />
      <button onClick={addtodo}>add</button>
      <ul>
        {todos.map(function (item, index) {
          let result = item.status ? (
            <li
              style={{ "text-decoration": "line-through" }}
              onClick={() => changeStatus(item, index)}
            >
              {item.text}
            </li>
          ) : (
            <li
              style={{ "text-decoration": "none" }}
              onClick={() => changeStatus(item, index)}
            >
              {item.text}
            </li>
          );
          return result;
        })}
      </ul>

      <h2>Just click on the todo if you completed your todo</h2>
    </div>
  );
}
