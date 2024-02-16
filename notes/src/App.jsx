import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const toggleEditing = (id) => {
    const updatedTodos = todos.map((elem) => {
      if (elem.id === id) {
        return { ...elem, isEditing: !elem.isEditing };
      }
      return elem;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((elem) => elem.id !== id);
    setTodos(updatedTodos);
  };

  const handleAdd = () => {
    if (inputValue !== "") {
      setTodos([
        ...todos,
        { text: inputValue, id: Date.now(), isEditing: false },
      ]);
    }
    setInputValue("");
  };
  

  


  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map((elem) => {
      if (elem.id === id) {
        return { ...elem, text: newText };
      }
      return elem;
    });
    setTodos(updatedTodos);
  };
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-1/2"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="text-xl font-bold">Your Todos</h2>
        <div className="todos">
          {todos.map((elem) => (
            <div className="todo flex" key={elem.id}>
              <div className="text">
                {elem.isEditing ? (
                  <input
                    type="text"
                    value={elem.text}
                    onChange={(e) => handleEdit(elem.id, e.target.value)}
                    // onBlur={() => handleEdit(elem.id, elem.text)}
                  />
                  
                ) : (
                  elem.text
                )}
              </div>
              <div className="buttons">
                <button
                  onClick={() => toggleEditing(elem.id)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm
                  font-bold text-white rounded-md mx-1"
                >
                  {elem.isEditing ? "Save" : "Edit"}
                </button>
                <button
                  onClick={() => handleDelete(elem.id)}
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
