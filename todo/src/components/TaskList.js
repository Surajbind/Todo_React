import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompletion } from '../tasks/tasksSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTransition, animated, config } from 'react-spring';

// Component for displaying task list
export function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Toggle task completion status
  const handleToggleCompletion = (task) => {
    dispatch(toggleTaskCompletion(task.id));
  };

    // Remove task from the list
  const handleDeleteTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const transitions = useTransition(tasks, {
    keys: task => task.id,
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff
  });
//
  return (
    <div className="task-list-container"> 
      <List className="task-list">
        {transitions((props, item) => (
          <animated.div style={props}>
            <ListItem className="task-list-item" key={item.id} style={{ overflow: 'hidden' }}>
              <Checkbox
                checked={item.completed}
                onChange={() => handleToggleCompletion(item)}
                sx={{
                  color: '#fff', // Color when unchecked
                  '&.Mui-checked': {
                    color: '#d1d2d4', // Color when checked
                  },
                }}
              />
              <ListItemText 
                primary={item.text} 
                style={{ color: item.completed ? '#d1d2d4':'white' }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </animated.div>
        ))}
      </List>
    </div>
  );
}
