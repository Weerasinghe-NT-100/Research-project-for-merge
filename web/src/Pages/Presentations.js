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
                sx={{ color:'#fed000', outlineColor:'#fed000' }}
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
      <Typography variant="h5" style={{ fontFamily: 'Roboto, sans-serif' }}>Past Presentations</Typography>
      <List>
        {viewItems_HTMLTABLE}
      </List>
    </>
  );
  }


export default Presentations;