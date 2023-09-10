import React, { useState, useContext } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContext';

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, connectionRef } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    
    return (
        <Container className='containerOptions'>
            <Paper elevation={10} className='paperOptions'>
                <form className='formOptions' noValidate autoComplete='off'>
                    <Grid container className='gridContainerOptions'>
                        <Grid item xs={12} md={6} className='paddingOptions'>
                            <Typography gutterBottom variant="h6">Hesab</Typography>
                            <TextField label="Adın" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} className='marginOptions'>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    ID-ni kopyala
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className='paddingOptions'>
                            <Typography gutterBottom variant="h6">Video Zəng Et</Typography>
                            <TextField label="Zəng edəcəyin ID" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button variant='contained' color='secondary' ref={connectionRef} startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} className='marginOptions'>Zəngi bitir</Button>
                            ) : (
                                <Button variant='contained' color='primary' startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} className='marginOptions'>
                                    Zəng Et
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}

export default Options
