import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      bgcolor="white"
      boxShadow="0px -1px 5px rgba(0, 0, 0, 0.1)"
      p={2}
      display="flex"
      justifyContent="space-around"
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/committee">Committee</Link>
      <Link to="/events">Events</Link>
      <Link to="/contact">Contact</Link>
    </Box>
  );
};

export default Footer;
