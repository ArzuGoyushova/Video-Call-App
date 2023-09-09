import React, { useContext, useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { SocketContext } from '../SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        window.location.reload();
    };

    const handleAnswerCall = () => {
        answerCall();
        setOpen(false);
    };

    useEffect(() => {
        if (call.isReceivedCall && !callAccepted) {
            setOpen(true);
        }
    }, [call.isReceivedCall, callAccepted]);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>{call.name} is calling:</DialogTitle>
            <DialogContent>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleAnswerCall}>
                    Answer
                </Button>
                <Button variant="contained" color="secondary" onClick={handleClose}>
                    Decline
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Notifications;
