import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';

import './App.css';
import Task from './components/Task'
import db from './firebase';

function App() {
  const [tasks, setTasks] = useState(['']);
  const [input, setInput] = useState('');

  useEffect(() => {
    //fires when App.js loads
    db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTasks(snapshot.docs.map(doc => ({id: doc.id, task: doc.data().task})))
    })
  }, [])

  const addTask = (e) => {
    e.preventDefault();
    //if(input === '') return;
    db.collection('tasks').add({
      task: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setTasks([...tasks, input]);
    setInput('');
  }

  return (
    <div className="App">
       <div className="header-container">
        <div className="header">
          <h1>To-Do APP</h1>
          <div className="task-input">
            <FormControl>
              <InputLabel htmlFor="Add Task">Add a Task</InputLabel>
              <Input value={input} onChange={e => setInput(e.target.value)}/>
            </FormControl>
            <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTask}>
              Add Task
            </Button>
          </div>
        </div>   
      </div>

      <div className="tasks">
        <ul>
          {tasks.map((task)=> (
            <Task task={task}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;