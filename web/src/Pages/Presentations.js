import React,{ useState, useEffect } from 'react';
import { List, ListItem, Box, ListItemIcon, ListItemText, Button, Typography } from '@mui/material';
import { PictureAsPdf as PdfIcon, Visibility as ViewIcon, GetApp as DownloadIcon } from '@mui/icons-material';

function Presentations() {

  const[TopicList,setTopiclist]=useState([]);
   
  const topics = [
    {'id':1, 'title':'Proposal Presentation', 'url1':'https://drive.google.com/file/d/1VjYlWHeLEdlksd9EujXmYDqOn1He47TS/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1VjYlWHeLEdlksd9EujXmYDqOn1He47TS'},
    {'id':2, 'title':'Progress Presentation1', 'url1':'https://drive.google.com/file/d/1HPYwGZfYS7Oib_aV0hueJ3kv7zcwLC2J/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1HPYwGZfYS7Oib_aV0hueJ3kv7zcwLC2J'},
    {'id':3, 'title':'Progress Presentation2', 'url1':'https://drive.google.com/file/d/16eMjpwmSFOD5ZSuQtmG1qClmh1zugeE1/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=16eMjpwmSFOD5ZSuQtmG1qClmh1zugeE1'},
    {'id':4, 'title':'Final Presentation', 'url1':'https://drive.google.com/file/d/1a0ONwe1oakzSe6s8TIJVxpFUiSyUORWN/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1a0ONwe1oakzSe6s8TIJVxpFUiSyUORWN'},
  ];

  useEffect(()=>{

    setTopiclist(topics);

  },[]);

     var viewItems_HTMLTABLE="";

     if (viewItems_HTMLTABLE != null) {

    viewItems_HTMLTABLE=
      TopicList.map((data)=>{
        
      return(
        <div key={data.id}>
            <ListItem>
              <ListItemIcon>
                <PdfIcon />
              </ListItemIcon>
              <ListItemText primary={data.title} />
              <Button
                variant="outlined"
                color='primary'
                href={data.url1}
                target="_blank"
                startIcon={<ViewIcon />}
              >
                View
              </Button>
              <Box mx={1} />
              <Button
                variant="outlined"
                color="secondary"
                href={data.url2}
                download
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </ListItem>
          </div>
      );
        
    });

  }

  else
  viewItems_HTMLTABLE="loading"
  
  return(
    <>
      <Box sx={{ width:'97%',height:'auto',m:2, textAlign:'justify' }}>
        <Typography sx={{ fontSize:'16px' }}>Welcome to our Past Project Presentations and Milestones page! This page serves as a comprehensive archive of our previous projects, highlighting key milestones achieved throughout their development.
          Our goal is to provide you with valuable insights into our project journey, showcasing the significant achievements, challenges overcome, and the continuous improvement of our work. 
          By revisiting our past project presentations, you can gain a deeper understanding of our commitment to excellence and innovation.</Typography>
      </Box>
      <Box m={1}>
        <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif', color:'#5c0001', textAlign:'justify' }}>Past Presentations</Typography>
      <List>
        {viewItems_HTMLTABLE}
      </List>
      </Box>
      
    </>
  );
  }


export default Presentations;