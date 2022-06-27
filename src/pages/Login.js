import * as React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: '',
        errors: [],
        loading: false
    })

    const navigate = useNavigate();

    const handleChange = (event) => {
        setLoginDetails({
            ...loginDetails,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoginDetails({
            ...loginDetails,
            loading: true
        });
        
        const userData = {
            email: loginDetails.email,
            password: loginDetails.password
        }

        axios
        .post('/api/login', userData)
        .then((response) => {
            localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
            setLoginDetails({
                ...loginDetails,
                loading: false,
            })
            navigate('/');
        })
        .catch((error) => {
            setLoginDetails({
                ...loginDetails,
                loading: false,
                errors: error.response.data
            })
        })
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="80vh"
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                marginTop="64px"
                gap="24px"
                width="296px"
            >
                <Typography variant="h5">
                    Login
                </Typography>
                <form 
                    noValidate
                    style={{
                        width: '100%',
                        marginTop: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px'
                    }}
                >
                    <TextField
                        variant='outlined'
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={loginDetails.loading}
                    >
                        Sign in
                    </Button>
                </form>
            </Box>
        </Box>
    )
}