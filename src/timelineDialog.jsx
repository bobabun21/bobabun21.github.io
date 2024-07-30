/* eslint-disable max-len */
import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { WavingHand } from '@mui/icons-material';
import './App.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

export default function TimelineDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className='button-highlight' onClick={handleClickOpen}>
        <WavingHand className='waving-hand-icon' />
        Learn more about me
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography variant='h6' style={{ marginTop: '1em' }}>
            Profile
          </Typography>
          <Typography variant='body2'>
            With four years of experience in healthcare and software development, I excel at leveraging technology to make a positive impact. I am known for my collaborative spirit and leadership abilities, and I am passionate about continuous learning. Currently, I am teaching myself Japanese with the goal of taking the JLPT N5 qualification exam.
          </Typography>
          <Typography variant='h6' style={{ marginTop: '1em' }} gutterBottom>
            Professional Experience
          </Typography>

          <Typography variant='subtitle1'>
            Catalyte Jr. Full-Stack Software Developer (March 2024 - Present)
          </Typography>
          <Typography variant='body2'>
            Developed applications using React JS and Java Spring Boot, including:
            - An administrative app for a coffee shop.
            - A patient management system optimizing record handling and biometrics.
            - A single-page hotel reservation app consuming RESTful data.
            - A REST API for movie rentals, with validation and unit testing.
          </Typography>
          <Typography variant='body2'>
            Served as Technical Lead Volunteer, assisting team members, enforcing best practices, and coordinating with the Product Owner.
          </Typography>

          <Typography variant='subtitle1' style={{ marginTop: '1em' }}>
            Inova Health System Clinical Technician 1 (1 year)
          </Typography>
          <Typography variant='body2'>
            Provided direct patient care and safety in a Medical-Surgical setting, proficient in Epic EMR software, and engaged in community outreach.
          </Typography>

          <Typography variant='subtitle1' style={{ marginTop: '1em' }}>
            Robin Healthcare Chief Medical Scribe (1 year)
          </Typography>
          <Typography variant='body2'>
            Managed medical scribing and provider documentation across various specialties, proficient in NextGen EMR and Paycor, and led daily accountability meetings.
          </Typography>

          <Typography variant='h6' style={{ marginTop: '1em' }}>
            Education & Skills
          </Typography>
          <Typography variant='body1'>
            B.S. Biological Sciences from Arizona State University.
          </Typography>
          <Typography variant='body2' style={{ marginTop: '1em' }}>
            Proficient in JavaScript, React, Java, PostgreSQL, HTML, CSS, Git, SQL, Jira. Strong communication, collaboration, and organizational skills, with experience in Agile/Scrum methodologies.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
