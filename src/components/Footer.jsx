import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AiFillHome, AiOutlineTeam } from 'react-icons/ai';
import { FcAbout } from 'react-icons/fc';
import { MdEmojiEvents } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

const Footer = () => {
  return (
    <Box
      bgcolor="white"
      boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
      p={2}
      display="flex"
      justifyContent="space-around"
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button component={Link} to="/" startIcon={<AiFillHome />}>
          Home
        </Button>
        <Button component={Link} to="/about" startIcon={<FcAbout />}>
          About
        </Button>
        <Button component={Link} to="/committee" startIcon={<AiOutlineTeam />}>
          Committee
        </Button>
        <Button component={Link} to="/events" startIcon={<MdEmojiEvents />}>
          Events
        </Button>
        <Button component={Link} to="/contact" startIcon={<IoCall />}>
          Contact
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
