import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
  const [newInput, setNewInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current.focus()
  })
  const changeHandler = (event) => {
     setNewInput(event.target.value);
  }
  const submitHandler = (event) => {
      event.preventDefault();
      props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: newInput,
      })
      setNewInput('');
  }
    return (
        <form className='todo-form' onSubmit={submitHandler}>
            {props.edit ? (
             <>
            <input type="text" placeholder="Update your item" value={newInput} 
              name="text" className='todo-input edit' onChange={changeHandler}
              ref={inputRef}
            />
            <button onClick={submitHandler} className='todo-button edit'>
            Update
          </button>
            </>
            ) : (
                <>
            <input type="text" placeholder="Add a todo" value={newInput} 
              name="text" className='todo-input' onChange={changeHandler}
              ref={inputRef}
            />
            <button onClick={submitHandler} className='todo-button'>
            Update
          </button>
            </>
          )}   
        </form>
    )
}

export default TodoForm;
