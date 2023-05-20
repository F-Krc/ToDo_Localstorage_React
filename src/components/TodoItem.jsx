import { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useTodosContext } from '../context/TodosContext';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({ itemProp }) => {
  //console.log(itemProp);
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const { user } = useAuthContext();

  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  return (
    <li key={itemProp.id} className="item">
      <div className="content" style={viewMode}>
        <input
          type="checkbox"
          id={`todo${itemProp.id}`}
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <label htmlFor={`todo${itemProp.id}`} className={itemProp.completed ? 'completed' : ''}>
          {itemProp.title}
        </label>
        {user && (
          <button onClick={handleEditing}>
            <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
          </button>
        )}
        <button onClick={() => delTodo(itemProp.id)}>
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className="textInput"
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
