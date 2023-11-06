import React from 'react';
import './AboutUs.css';
import { Box, Avatar, Typography, Paper, Grid } from '@mui/material';
import it20273194 from './photo/it20273194.jpg';
import it19087252 from './photo/it19087252.png';
import it20168704 from './photo/it20168704.jpg';
import it20017392 from './photo/it20017392.jpg';
import teamImage from './photo/image.jpg'; // Ensure this path is correct

const AboutUs = () => {
    const members = [
        {
            img: it20273194,
            alt: 'Nuha M.N',
            name: 'Nuha M.N',
            email: 'it20273194@my.sliit.lk',
            id: 'IT20273194',
            phone: '+94 76 251 9003'
        },
        {
            img: it20168704,
            alt: 'G.K.N.P. Wishvajith',
            name: 'G.K.N.P. Wishvajith',
            email: 'it20168704@my.sliit.lk',
            id: 'IT20168704',
            phone: '+94 76 546 3585'
        },
        {
            img: it19087252,
            alt: 'G.S Weeratunga',
            name: 'G.S Weeratunga',
            email: 'it19087252@my.sliit.lk',
            id: 'IT19087252',
            phone: '+94 77 724 2998'
        },
        {
            img: it20017392,
            alt: 'Weerasinghe N.T',
            name: 'Weerasinghe N.T',
            email: 'it20017392@my.sliit.lk',
            id: 'IT20017392',
            phone: '+94 76 381 5430'
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3, bgcolor: 'background.default', py: 5 }}>
            <Paper elevation={3} sx={{ my: 1, mx: 'auto', p: 2, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', mb: 3 }}>
                    About Us
                </Typography>
                <img src={teamImage} alt="Team" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                <Typography paragraph sx={{ textAlign: 'justify', mb: 4 }}>
                We're on the forefront of combating air pollution through innovative technology. Our approach integrates real-time data analysis and practical tools to keep the environment in check. By harnessing the power of time series forecasting, we predict pollution trends. We use image processing to monitor environmental changes, and our interactive chatbot offers advice on maintaining healthy practices. Plus, with our facemask recognition feature, we're promoting safety measures to enhance public health. Join us in our mission to clear the air for a healthier, more sustainable world.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {members.map((member) => (
                        <Grid item xs={12} sm={6} md={3} key={member.id}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                                <Avatar alt={member.alt} src={member.img} sx={{ width: 100, height: 100, mb: 1 }} />
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography color="textSecondary">{member.email}</Typography>
                                <Typography color="textSecondary">{member.id}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', mt: 5, mb: 3 }}>
                    Contact Us
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {members.map((member) => (
                        <Grid item xs={12} sm={6} md={3} key={member.id + "-contact"}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6">{member.name}</Typography>
                                <Typography color="textSecondary">{member.email}</Typography>
                                <Typography color="textSecondary">{member.phone}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
}

export default AboutUs;
