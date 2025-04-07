import React, { useEffect } from 'react'
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
import '../App.css';
import Herosection from './Herosection';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function Header() {
    const [isdraweropen, setIsdraweropen] = useState(true)
    const [collapseopen, setIscollapseopen] = useState(false)

    const handlecollapsemenu = () => {
        setIscollapseopen(!collapseopen)
    }


    return (
        <>
            {/* start of navbar */}
            <Grid container spacing={2}>
                <Grid size={{ xs: 0, sm: 0, md: 3, lg: 3 }}>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} sx={{ mt: 1 }} className="header_grid">
                    {/* size=6 */}
                    <Card className='main_card'>
                        <CardContent className="cardconetentsection" >
                            <Typography>
                                <a href="" className='navlinks'>Home</a>
                            </Typography>
                            <Typography>
                                <a href="#Experience" className='navlinks'>About</a>
                            </Typography>
                            <Typography>
                                <a href="#Projects" className='navlinks'>Projects</a>
                            </Typography>
                            <Typography>
                                <a href="#Contact" className='navlinks'>Contact</a>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 0, sm: 0, md: 3, lg: 3 }}>
                </Grid>
            </Grid>
            {/* end of navbar */}


            <Herosection />
            <div id="Experience">
                <Experience />
            </div>
            <div id="Projects">
                <Projects />
            </div>
            <div id="Contact">
                <Contact />
            </div>
            <Footer />

        </>
    )
}

export default Header
