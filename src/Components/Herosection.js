import React from 'react';
import { AppBar, Toolbar, Grid, Rating, IconButton, Button, Badge, Avatar, TextField, Autocomplete, Card, CardActions, Typography, CardContent, CardMedia, Accordion, AccordionDetails, AccordionSummary, Alert, Snackbar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Box, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import PhoneIcon from '@mui/icons-material/Phone';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../App.css';

function Herosection() {
    return (
        <>
            <Grid container spacing={2} className="hero_section" sx={{ mt: 8 }}>
                <Grid size={{ xs: 0, md: 0, lg: 1, xl: 1 }}></Grid>
                <Grid size={{ xs: 12, md: 12, lg: 6, xl: 6 }}>
                    <Typography variant='h3' className='name_intro'>
                        
                        <Typewriter
                            options={{
                                strings: [
                                    "Hi 👋, I'm Sainath Reddy!",
                                    "I'm a Full Stack Python Developer.",
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50, //this is the typing speed
                                deleteSpeed: 30,  //this is deleting speed
                            }}
                        />
                    </Typography>
                    <Typography variant='h6' className='desc'>
                        I am a full-stack Python developer . My expertise spans frontend and backend technologies, including HTML, CSS, JavaScript, Python, SQL, and AWS. I also have hands-on experience with Selenium for automation testing. Currently, I am enhancing my skills by learning React Redux and Django to build more efficient and scalable applications. As I continue to grow in my career, I am actively seeking new opportunities where I can leverage my experience and newly acquired skills to contribute effectively to a dynamic team.
                     
                    </Typography>
                    
                    <IconButton href='https://github.com/SainathReddy3155'  target="_blank">
                        <GitHubIcon className='herosectionicons' />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/sainath-reddy-56a677191/"  target="_blank">
                        <LinkedInIcon className='herosectionicons' />
                    </IconButton>
                    <IconButton  href="mailto:reddy.sainath3155@gmail.com"  target="_blank">
                        <EmailIcon className='herosectionicons' />
                    </IconButton>
                    <br/>
                    <Button variant="outlined" href='/Sainath_Python.pdf'>Download CV <ArrowDownwardIcon/></Button><br/>
                    {/* <GitHubIcon/> */}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="image_grid">
                    {/* <img className='image' src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-business-portfolio-3d-character-illustration-png-image_10204176.png" /> */}
                    <img className='image' src ="/cartoon.png"/>
                </Grid>
                <Grid size={{ xs: 0, md: 0, lg: 1, xl: 1 }}>

                </Grid>



            </Grid>
        </>
    )
}

export default Herosection
