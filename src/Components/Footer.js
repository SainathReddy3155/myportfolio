import React from 'react'
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
function Footer() {
    return (
        <>
            <Grid container spacing={4} sx={{ mt: 4, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={6} lg={6} className="allrights">
                    © 2025 Sainath Reddy. All rights reserved.
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} className="contacticons">
                    <IconButton href='https://github.com/SainathReddy3155'  target="_blank">
                        <GitHubIcon className='cicons' />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/sainath-reddy-56a677191/"  target="_blank">
                        <LinkedInIcon className='cicons' />
                    </IconButton>
                    <IconButton  href="mailto:reddy.sainath3155@gmail.com"  target="_blank">
                        <EmailIcon className='cicons' />
                    </IconButton>

                </Grid>
            </Grid>

        </>
    )
}

export default Footer
