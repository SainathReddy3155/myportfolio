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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import '../App.css';

function Projects() {
    
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 700, fontStyle: "bold", display: "flex", justifyContent: "center", alignItems: "center", color: "#034ea1" }}>
                Projects
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                {/* First Row */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ height: '100%', width: 550 }} className='projectcard'>
                        <CardContent>
                            <Typography variant="h5">Web Scraping Application</Typography>
                            <Typography sx={{ mt: 2, color: "rgb(88, 88, 117)" }}>Web scraping Application is a Python flask-based application where users have different roles and responsibilities (User based
                                login system like admin, user). This application gets live data from Twitter, LinkedIn, YouTube, Google My Business (GMB) and
                                other doctor-based websites. This application uses RDS SQL server of AWS to store the data and hosted in EC2 instance.

                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <Chip label="HTML" variant="outlined" color ="primary"/>
                                <Chip label="CSS" variant="outlined" color ="primary"/>
                                <Chip label="JavaScript" variant="outlined" color ="primary"/>
                                <Chip label="Python" variant="outlined" color ="primary"/>
                                <Chip label="Selenium" variant="outlined" color ="primary"/>
                                <Chip label="SQL" variant="outlined" color ="primary"/>
                                <Chip label="AWS" variant="outlined" color ="primary"/>
                            </Stack>
                            <a href="https://github.com/SainathReddy3155/products_dashboard_images"
                                target="_blank">
                                <Chip label="Visit Site" variant="outlined" color ="secondary" sx={{mt:1}}/>
                            </a>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ height: '100%', width: 550 }} className='projectcard'>
                        <CardContent>
                            <Typography variant="h5">HR Ticket Resolving Application</Typography>
                            <Typography sx={{ mt: 2, color: "rgb(88, 88, 117)" }}>Engineered a ticket resolution platform that streamlined communication between employees and HR, resulting in an
                                average of 300 tickets processed monthly, with a 95% notification accuracy rate for ticket status updates.
                                Secure and authorised processing of sensitive HR data is ensured via integrated role-based access control.
                                React is used to create an intuitive user interface that increased user engagement and ticket submission efficiency.</Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <Chip label="HTML" variant="outlined" color ="primary"/>
                                <Chip label="CSS" variant="outlined" color ="primary"/>
                                <Chip label="JavaScript" variant="outlined" color ="primary"/>
                                <Chip label="React" variant="outlined" color ="primary"/>
                                <Chip label="Python" variant="outlined" color ="primary"/>
                                <Chip label="Flask" variant="outlined" color ="primary"/>
                                <Chip label="SQL" variant="outlined" color ="primary"/>
                                <Chip label="AWS" variant="outlined" color ="primary"/>
                            </Stack>
                            
                        </CardContent>
                    </Card>
                </Grid>

                {/* Second Row */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ height: '100%', width: 550 }} className='projectcard'>
                        <CardContent>
                            <Typography variant="h5">Analytics Dashboard</Typography>
                            <Typography sx={{ mt: 2, color: "rgb(88, 88, 117)" }}>Analytics Dashboard is python-based application which is used to check the analytics of the users in different kind of charts (pie,
                                line, bar, map etc.). Admin can perform CRUD operations and manipulate the data on a daily basis
                                Displayed real-time performance metrics of doctors, OP/IP patient flow, and upcoming appointments for better operational decisions.
                                Built RESTful APIs in Flask for seamless data handling between the frontend and backend.
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <Chip label="HTML" variant="outlined" color ="primary"/>
                                <Chip label="CSS" variant="outlined" color ="primary"/>
                                <Chip label="JavaScript" variant="outlined" color ="primary"/>
                                <Chip label="React" variant="outlined" color ="primary"/>
                                <Chip label="Python" variant="outlined" color ="primary"/>
                                <Chip label="Flask" variant="outlined" color ="primary"/>
                                <Chip label="SQL" variant="outlined" color ="primary"/>
                                <Chip label="AWS" variant="outlined" color ="primary"/>
                                <Chip label="Highcharts" variant="outlined" color ="primary"/>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Card sx={{ height: '100%', width: 550 }} className='projectcard'>
                        <CardContent>
                            <Typography variant="h5">Dialog flow chatbot</Typography>
                            <Typography sx={{ mt: 2, color: "rgb(88, 88, 117)" }}> Dialog flow chatbot using the service provided by the google cloud and hosted the chatbot in WhatsApp using third party API’s.
                                Enabled real-time two-way communication with users via WhatsApp, enhancing engagement and support automation.
                                Implemented message templates to send personalized notifications, appointment reminders, and status updates.
                                Configured and submitted template messages for approval (whitelisting) and managed user opt-ins for automated messaging.
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>

                                <Chip label="Python" variant="outlined" color ="primary"/>
                                <Chip label="Flask" variant="outlined" color ="primary"/>
                                <Chip label="Dialogflow" variant="outlined" color ="primary"/>
                                <Chip label="REST API" variant="outlined" color ="primary"/>
                                <Chip label="SQL" variant="outlined" color ="primary"/>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Projects
