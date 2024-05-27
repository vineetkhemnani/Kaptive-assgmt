import React from 'react'
import { Avatar, Box, Button, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: 'background.paper', // Use background color to differentiate
        color: 'text.primary',
        textAlign: 'center',
        pt: 2,
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center', // Vertically center the content
      }}
    >
      <Typography variant="body1" sx={{ ml: '100px', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Copyright. All rights reserved by PLSE.
      </Typography>
      <Box sx={{ mr: '30px' }}>
        <Button sx={{ fontSize: '0.75rem' }}>Facebook</Button>
        <Button sx={{ fontSize: '0.75rem' }}>Google</Button>
        <Button sx={{ fontSize: '0.75rem' }}>Twitter</Button>
        <Button sx={{ fontSize: '0.75rem' }}>Google</Button>
      </Box>

      
    </Box>
  )
}

export default Footer
