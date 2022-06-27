import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authMiddleware } from '../util/auth';
import { CardContent } from '@mui/material';

export default function Summaries() {
    const [summaries, setSummaries] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        authMiddleware(navigate);
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = { Authorization : `${authToken}` }
        
        axios
        .get('/api/summaries')
        .then((response) => {
            setSummaries(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <Box 
            display="flex"
            width="100%"
            height="100%"
            gap="32px"
            flexWrap="wrap"
        >
            {
                summaries.map((summary, i) => (
                    <Card key={summary.title} sx={{ minWidth: '275px', maxWidth: '400px' }}>
                        <CardContent>
                            <Typography variant='h4'>{summary.title}</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>{summary.body}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Box>
    )

}