import React,{ useState, useEffect } from 'react';
import { List, ListItem, Box, ListItemIcon, ListItemText, Button, Typography } from '@mui/material';
import { PictureAsPdf as PdfIcon, Visibility as ViewIcon, GetApp as DownloadIcon } from '@mui/icons-material';

function Documents() {

  const[charterList,setCharterlist]=useState([]);
  const[proposalList,setProposallist]=useState([]);
  const[statusList,setStatuslist]=useState([]);
  const[finalList,setFinallist]=useState([]);
   
  const charter = [
    {'id':1, 'title':'Project Charter', 'url1':'https://drive.google.com/file/d/1Xd7mkAI031mgk_dkhaxLlG2n3zKKZTbl/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1Xd7mkAI031mgk_dkhaxLlG2n3zKKZTbl'}
  ];

  const proposals = [
    {'id':1, 'title':'Proposal for Forcasting Air pollution By Time Seires Analysis', 'url1':'https://drive.google.com/file/d/1dhAMpklgugyzebBBWLSPzaaStP15Qql9/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1dhAMpklgugyzebBBWLSPzaaStP15Qql9'},
    {'id':2, 'title':'Proposal for Estimating Air Pollution Level Using Sky Images', 'url1':'https://drive.google.com/file/d/1kVpfBJwDLjkhetLkiAMwMASAKDKkI6V7/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1kVpfBJwDLjkhetLkiAMwMASAKDKkI6V7'},
    {'id':3, 'title':'Proposal for Developing Chat Bot for Air Pollution Matters', 'url1':'https://drive.google.com/file/d/1OF11vgWO5hZaXzh2SqojA3JEF8UZYXEa/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1OF11vgWO5hZaXzh2SqojA3JEF8UZYXEa'},
    {'id':4, 'title':'Proposal for Face Mask Detecting System', 'url1':'https://drive.google.com/file/d/1nkvRzvL_e8GA_Q9zCgSAobhhE88SHTFA/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1nkvRzvL_e8GA_Q9zCgSAobhhE88SHTFA'}
  ];

  const status = [
    {'id':1, 'title':'Status Document I', 'url1':'https://drive.google.com/file/d/19LqNE7YXdIBWYG-BjYLJiJFx8ZQotDrC/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=19LqNE7YXdIBWYG-BjYLJiJFx8ZQotDrC'},
    {'id':2, 'title':'Status Document II', 'url1':'https://drive.google.com/file/d/1cEGNRAVhtZCmDzC-DZZhS-Rj0FSexEG0/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=1cEGNRAVhtZCmDzC-DZZhS-Rj0FSexEG0'}
  ];

  const final = [
    {'id':1, 'title':'Final Report for Forcasting Air pollution By Time Seires Analysis', 'url1':'https://drive.google.com/file/d/10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW'},
    {'id':2, 'title':'Final Report for Estimating Air Pollution Level Using Sky Images', 'url1':'https://drive.google.com/file/d/10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW'},
    {'id':3, 'title':'Final Report for Developing Chat Bot for Air Pollution Matters', 'url1':'https://drive.google.com/file/d/10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW'},
    {'id':4, 'title':'Final Report for Face Mask Detecting System', 'url1':'https://drive.google.com/file/d/10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=10yLlUuVDQ5JQh6L2UiX3UaEhKQi-x-oW'},
    {'id':5, 'title':'Final Report for The Whole Research Project', 'url1':'https://drive.google.com/file/d/125Ic6xadGt9HvskMvOP_YYV4O_9LEp-3/view?usp=sharing','url2':'https://drive.google.com/uc?export=download&id=125Ic6xadGt9HvskMvOP_YYV4O_9LEp-3'}
  ];

  useEffect(()=>{

    setCharterlist(charter);
    setProposallist(proposals);
    setStatuslist(status);
    setFinallist(final);

  },[]);

     var viewItems_HTMLTABLE1="";
     var viewItems_HTMLTABLE2="";
     var viewItems_HTMLTABLE3="";
     var viewItems_HTMLTABLE4="";

     if (viewItems_HTMLTABLE1 != null && viewItems_HTMLTABLE2 != null && viewItems_HTMLTABLE3 != null && viewItems_HTMLTABLE4 !=null) {

    viewItems_HTMLTABLE1=
      charterList.map((data1)=>{
        
      return(
        <div key={data1.id}>
            <ListItem>
              <ListItemIcon>
                <PdfIcon />
              </ListItemIcon>
              <ListItemText primary={data1.title} />
              <Button
                variant="outlined"
                color='primary'
                href={data1.url1}
                target="_blank"
                startIcon={<ViewIcon />}
              >
                View
              </Button>
              <Box mx={1} />
              <Button
                variant="outlined"
                color="secondary"
                href={data1.url2}
                download
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </ListItem>
          </div>
      );
        
    });

    viewItems_HTMLTABLE2=
      proposalList.map((data2)=>{
        
      return(
        <div key={data2.id}>
            <ListItem>
              <ListItemIcon>
                <PdfIcon />
              </ListItemIcon>
              <ListItemText primary={data2.title} />
              <Button
                variant="outlined"
                color='primary'
                href={data2.url1}
                target="_blank"
                startIcon={<ViewIcon />}
              >
                View
              </Button>
              <Box mx={1} />
              <Button
                variant="outlined"
                color="secondary"
                href={data2.url2}
                download
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </ListItem>
          </div>
      );
        
    });

    viewItems_HTMLTABLE3=
      statusList.map((data3)=>{
        
      return(
        <div key={data3.id}>
            <ListItem>
              <ListItemIcon>
                <PdfIcon />
              </ListItemIcon>
              <ListItemText primary={data3.title} />
              <Button
                variant="outlined"
                color='primary'
                href={data3.url1}
                target="_blank"
                startIcon={<ViewIcon />}
              >
                View
              </Button>
              <Box mx={1} />
              <Button
                variant="outlined"
                color="secondary"
                href={data3.url2}
                download
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </ListItem>
          </div>
      );
        
    });

    viewItems_HTMLTABLE4=
      finalList.map((data4)=>{
        
      return(
        <div key={data4.id}>
            <ListItem>
              <ListItemIcon>
                <PdfIcon />
              </ListItemIcon>
              <ListItemText primary={data4.title} />
              <Button
                variant="outlined"
                color='primary'
                href={data4.url1}
                target="_blank"
                startIcon={<ViewIcon />}
              >
                View
              </Button>
              <Box mx={1} />
              <Button
                variant="outlined"
                color="secondary"
                href={data4.url2}
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

  else{
    viewItems_HTMLTABLE1="loading"
    viewItems_HTMLTABLE2="loading"
    viewItems_HTMLTABLE3="loading"
    viewItems_HTMLTABLE4="loading"
  }
  
  
  return(
    <>
      <Box sx={{ width:'97%',height:'auto',m:1 }}>
        <Typography variant='h4' sx={{ fontWeight:'bold',color:'rgb(43, 43, 111)' }}>Documents</Typography>
      </Box>
      <Box sx={{ width:'97%',height:'auto',m:1, textAlign:'justify' }}>
        <Typography sx={{ fontSize:'16px',fontWeight:'bold' }}>Welcome to our Project Documents Portal. This page serves as a central hub for all project-related documents, providing you with easy access to key project artifacts. Whether you're a project team member, stakeholder, or interested party, you'll find essential documents such as the Project Charter, Project Proposals, Status Updates, and Final Reports readily available for your reference.</Typography>
      </Box>
      <Box m={1}>
        <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif', color:'#5c0001', textAlign:'justify' }}>Project Charter</Typography>
      <List>
        {viewItems_HTMLTABLE1}
      </List>
      <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif', color:'#5c0001', textAlign:'justify' }}>Project Proposal Documents</Typography>
      <List>
        {viewItems_HTMLTABLE2}
      </List>
      <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif', color:'#5c0001', textAlign:'justify' }}>Project Status Documents</Typography>
      <List>
        {viewItems_HTMLTABLE3}
      </List>
      <Typography variant="h6" style={{ fontFamily: 'Roboto, sans-serif', color:'#5c0001', textAlign:'justify' }}>Final Project Reports</Typography>
      <List>
        {viewItems_HTMLTABLE4}
      </List>
      </Box>
      
    </>
  );
  }


export default Documents;