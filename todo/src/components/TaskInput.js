import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasks/tasksSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Component for adding tasks
export function TaskInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

    // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTask({
      id: Date.now(),
      text: input,
      completed: false
    }));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="task-input"
        label="Add Task"
        variant="outlined"
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          mb: 2, 
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderRadius:'5px',
              borderColor: '#ffffff',          
            },
          },
        }}
      />
      <Button 
      type="submit" 
      variant="contained"
      color="primary"
      sx={{ 
        ml:0.3,
        mb: 2,
        bgcolor: 'primary.main', 
        '&:hover': {
          bgcolor: 'primary.dark',
        },
        px: 3, 
        py: 0.9,
      }}
      >
        Add
      </Button>
    </form>
  );
}
