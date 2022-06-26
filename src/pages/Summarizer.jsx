import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';

import { authMiddleware } from '../auth/auth';

function Summarizer() {
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [sumarized, setSumarized] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    authMiddleware(navigate);
  }, [navigate]);

  const handleTextInput = (e) => {
    setContent(e.target.value);
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