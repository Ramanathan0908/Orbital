import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { authMiddleware } from '../util/auth';

function Summarizer() {
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [sumarized, setSumarized] = useState('');
  const [title, setTitle] = useState('');
  const [titlePrompt, setTitlePrompt] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTitleClose = () => {
    setTitle('');
    setTitlePrompt(false);
  }

  React.useEffect(() => {
    authMiddleware(navigate);
  }, [navigate]);

  const handleTextInput = (e) => {
    setContent(e.target.value);
  }

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    setLoading(true)
    fetch("/summarize", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content)
    })
      .then(res => res.json())
      .then(obj => {
        setLoading(false);
        setSumarized(obj.summary)
      });
  } 

  const handleClear = () => {
    setContent('');
    setSumarized('');
  }

  const handleSave = () => {
    if (sumarized === '') {
      return;
    } 
    setTitlePrompt(true);
  }

  const handleCreate = () => {
    setTitlePrompt(false);
    const summary = {
      title: title,
      body: sumarized
    }

    const options = {
      url: '/api/summary',
      method: 'post',
      data: summary
    }

    const authToken = localStorage.getItem('AuthToken');
    axios.defaults.headers.common = { Authorization : `${authToken}` };
    axios(options).then(() => null).catch(err => console.log(err));
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#D7EAE9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <TextField
        value={content}
        onChange={handleTextInput}
        multiline
        rows={15}
        sx={{
          width: '70%',
        }}
      />
      <Dialog open={titlePrompt} onClose={handleTitleClose}>
        <DialogTitle>Title</DialogTitle>
        <TextField
          autoFocus
          variant='standard'
          value={title}
          onChange={handleTitleInput}
          sx={{
            width: '296px',
            p: '16px'
          }}
        />
        <DialogActions>
          <Button onClick={handleTitleClose}>cancel</Button>
          <Button onClick={handleCreate}>Save</Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          display: 'flex',
          gap: '15px'
        }}
      >
        <Button
          variant='contained'
          onClick={handleClick}
        >
          summarize
        </Button>
        <Button
          variant='outlined'
          onClick={handleClear}
        >
          clear
        </Button>
        <Button
          variant='contained'
          onClick={handleSave}
        >
          create
        </Button>
      </Box>
      {
        loading 
        ? (
          <Box
            sx={{
              width: '70%'
            }}
          >
            <LinearProgress />
          </Box>
        ) : (
          <Box
            sx={{
              width: '70%'
            }}
          >
            {sumarized}
          </Box>
        )
      }
    </Box>
  );
}

export default Summarizer;