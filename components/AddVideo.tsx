'use client';
import * as React from 'react';
import Alert from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(`URL: ${url}, Title: ${title}`);
    setOpen(false);
  };

  return (
    <div className='z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex my-5'>
      <Button
        color='success'
        variant='contained'
        onClick={handleClickOpen}
      >
        Add Video
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Video</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a video to this website, please enter the URL and title below
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='url'
            label='URL'
            type='url'
            fullWidth
            variant='standard'
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          <TextField
            margin='dense'
            id='title'
            label='Title'
            type='text'
            fullWidth
            variant='standard'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add a video</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
