import React from 'react';
import '../Styles/AboutUs.css'
import { Box, Avatar, Typography, Paper, Grid } from '@mui/material';
import it20273194 from '../Web-photos/it20273194.jpg';
import it19087252 from '../Web-photos/it19087252.png';
import it20168704 from '../Web-photos/it20168704.jpg';
import it20017392 from '../Web-photos/it20017392.jpg';

const AboutUs = () => {
    const members = [
        {
            img: it20273194,
            alt: 'Nuha M.N',
            name: 'Nuha M.N',
            email: 'it20273194@my.sliit.lk',
            id: 'it20273194'
        },
        {
            img: it20168704,
            alt: 'G.K.N.P. Wishvajith',
            name: 'G.K.N.P. Wishvajith',
            email: 'it20168704@my.sliit.lk',
            id: 'it20168704'
        },
        {
            img: it19087252,
            alt: 'G.S Weeratunga',
            name: 'G.S Weeratunga',
            email: 'it19087252@my.sliit.lk',
            id: 'it19087252'
        },
        {
            img: it20017392,
            alt: 'Weerasinghe N.T',
            name: 'Weerasinghe N.T',
            email: 'it20017392@my.sliit.lk',
            id: 'it20017392'
        }
    ];

    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
            <Paper elevation={3} sx={{ my: 1, mx: 'auto', p: 2, borderRadius: 2, backgroundColor:'transparent' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', mb: 3, color:'rgb(43, 43, 111)', fontWeight:'bold' }}>
                    About Us
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify', mb: 4 }}>
                    Air pollution refers to the release of pollutants into the air that are detrimental to human health and the planet as a whole. While complete eradication of air pollution may not be feasible, significant measures can be taken to mitigate it. Our research project focuses on investigating the levels of air pollution and its effects on human health, delving into aspects such as the Air Quality Index and cloud compositions. By assessing the variations in pollution levels over time, we aim to develop a face mask detection awareness system to minimize the health impacts of air pollution.
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
                <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', mt: 5, mb: 3, fontWeight:'bold',color:'rgb(43, 43, 111)' }}>
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