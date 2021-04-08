import React from 'react';
import './task.css'

import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import db from '../firebase';

function Task(props) {
    return (
        <div className="task">
            <List>
                <ListItem>
                    <ListItemText primary={props.task.task}/>
                </ListItem>
            </List>
            <div>
                <DeleteIcon onClick={e => {db.collection('tasks').doc(props.task.id).delete()}}/>
            </div>
            
        </div>
    )
}

export default Task