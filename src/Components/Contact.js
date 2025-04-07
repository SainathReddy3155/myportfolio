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
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
function Contact() {
    const [result, setResult] = React.useState("");
    const [alerts,setAlerts]=useState(false)
    const[alertcontent,setAlertcontent]=useState('')
    const[alertseverity,setAlertseverity]=useState('')

    
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5ca36658-3dcd-4667-8a29-38912485e9bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setAlertcontent("Thank You. I will respond as soon as possible")
      setAlertseverity('success')
      setAlerts(true)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setAlertcontent("Something Went wrong. Please Try Again.")
      setAlertseverity('eroor')
      setAlerts(true)
    }
  };
    return (
        <>
            <Typography variant='h4' sx={{ mt: 3, fontWeight: 700, fontStyle: "bold", display: "flex", justifyContent: "center", alignItems: "center", color: "#034ea1" }}>
           Let's Work Together

            </Typography>

            <Grid container spacing={4} sx={{ mt: 4, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                   
                    <img className='image' src="/contact.png" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{width:450,height:400}}>

                    <Card  sx={{ background: "white",borderRadius:5}}>
                        <CardContent sx={{width:300,height:350}}>
                        {alerts?<Alert severity={alertseverity} sx={{width:350}}>{alertcontent} </Alert>:<></>}
                            <form id="loginform" method="POST" onSubmit={onSubmit}>
                                <FormControl>
                                    <TextField type="text" required name="name" id='standard-basic_name' variant="standard" label='Name' sx={{ marginTop: 2, width: 400 }}  ></TextField>
                                    <TextField type="email" required name="email" id='standard-basic_email' variant="standard" label='Email' sx={{ marginTop: 2 }}  ></TextField>
                                    <TextField type="text" required name="message" id='standard-basic_message' variant="standard" label='Message' sx={{ marginTop: 2 }}  ></TextField>


                                    <Button type="submit" variant='contained' sx={{ marginTop: 8 }}>Send Mesage</Button>
                                </FormControl>
                            </form>
                        </CardContent>
                        
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default Contact
