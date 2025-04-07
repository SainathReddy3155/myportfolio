import React from 'react'
import { AppBar, Paper, Toolbar, Grid, Rating, IconButton, Button, Badge, Avatar, TextField, Autocomplete, Card, CardActions, Typography, CardContent, CardMedia, Accordion, AccordionDetails, AccordionSummary, Alert, Snackbar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Drawer, Box, Menu, MenuItem, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material'
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
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from "@mui/icons-material/Work";

import { Link } from 'react-router-dom';

import '../App.css';
const experiences = [
    {
        title: "Experian - Python Engineer",
        time: "October 2024 - Present",
        description: ` Developed Python scripts to automate the data sampling process. Ensured the data integrity by checking for completeness, duplication, accuracy, and consistency
        . Built numerous Lambda functions using python and automated the process using the event created.
        . Developed REST APIs using amazon api gateway to trigger lambda functions.
        . Engineered Python-based data transformation scripts for integrating customer behaviour data into SQLite, allowing the team to identify findings and fix the three biggest causes of database query errors.`,
    },
    {
        title: "Ford - Software Engineer (Michigan)",
        time: "September 2023 to September 2024",
        description: `Writing effective, scalable code. Developing back-end components to improve responsiveness and overall performance. Text Processing and analytics with Python.
        Worked on ETL processing which consists of data transformation, data sourcing, mapping, conversion and loading.
        Designing, Building, and automating solutions utilizing AWS services such as EC2, S3, RDS, Lambda, IAM, and API Gateway.`
    },
    {
        title: "Multiplier AI Solutions - Python Developer (India)",
        time: "October 2021 to June 2023",
        description: `Write scripts using python modules and their libraries to develop programs that improve the processing of access requests.
        Utilized PyUnit, the Python Unit test framework, for all Python applications and used Django Database
APIs to access database objects.
Developed Merge jobs in Python to extract and load data into MySQL database, also worked on Python
ETL file loading and use of the regular expression`,
    }, 
    {
        title: "ESK Technologies  - Software Engineer (India)",
        time: "September 2019 to September 2021",
        description: `Deliver backend software solutions that yield excellent scalability and reliability. Collaborate with front end engineers, product managers and other engineers.
        Worked closely with the designer. Converted Photoshop images into XHTML/CSS, complex Flash integration. Designed and developed the UI of the website using HTML, AJAX, CSS and JavaScript.
        Worked on AJAX framework to transform Datasets and Data tables into HTTP-serializable JSON strings.`,
    },
];
function Experience() {
    return (
        <>
            <Typography variant='h4' sx={{ fontWeight: 700, fontStyle: "bold", display: "flex", justifyContent: "center", alignItems: "center",color:"#034ea1" }}>
                Professional Experience
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 0, md: 0, lg: 1, xl: 1 }}>

                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 10, xl: 10 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4  ,xs: 12, md: 12, lg: 10, xl: 10}}>
                        <Timeline position="alternate">
                            {experiences.map((exp, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary">
                                            <WorkIcon />
                                        </TimelineDot>
                                        {index !== experiences.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} sx={{ p: 2 }}>
                                            <Typography variant="h6">{exp.title}</Typography>
                                            <Typography variant="subtitle2" color="textSecondary">
                                                {exp.time}
                                            </Typography>
                                            <Typography class="exp_desc">{exp.description}</Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Box>
                </Grid>

                <Grid size={{ xs: 0, md: 0, lg: 1, xl: 1 }}>

                </Grid>
            </Grid>
        </>
    )
}

export default Experience
