import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

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
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { text: inputValue, id: Date.now(), isEditing: false },
      ]);
      setInputValue("");
    }
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
        <div className="addTodo my-5 flex flex-col sm:flex-row items-center">
          <h2 className="text-lg font-bold mb-3 sm:mb-0">Add a Todo</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your todo..."
            className="w-full sm:w-auto bg-white border border-gray-300 rounded-md p-2 outline-none focus:border-violet-500"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-md mt-3 sm:mt-0 sm:ml-3"
          >
            Add
          </button>
        </div>
        <h2 className="text-xl font-bold mb-3">Your Todos</h2>
        <div className="todos">
          {todos.map((elem) => (
            <div
              className="todo flex items-center justify-between mb-3"
              key={elem.id}
            >
              <div className="text flex-grow mr-3">
                {elem.isEditing ? (
                  <input
                    type="text"
                    value={elem.text}
                    onChange={(e) => handleEdit(elem.id, e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md p-2 outline-none focus:border-violet-500"
                  />
                ) : (
                  elem.text
                )}
              </div>
              <div className="buttons">
                <button
                  onClick={() => toggleEditing(elem.id)}
                  className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-md mr-2"
                >
                  {elem.isEditing ? "Save" : "Edit"}
                </button>
                <button
                  onClick={() => handleDelete(elem.id)}
                  className="bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-md"
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
