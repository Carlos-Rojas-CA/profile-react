import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBarScroll from './components/App-Bar-Scroll/App-bar'
import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './utils/themeUtil';
import Grid from '@material-ui/core/Grid';
import profile from './assets/Profile_Picture.png'
import { Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';






function App() {



  return (
    <div className="App">
      <header className="App-header">
        {/* <ThemeProvider theme={theme}> */}
        <AppBarScroll myName={'Carlos Rojas'}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Container maxWidth="md" className="container">
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <img src={profile} alt="Carlos" className="profile" />
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Typography variant="h4" style={{paddingTop: '20px', fontFamily: 'Coda, sans-ser'}}>Carlos Rojas</Typography>
                    <Typography variant="h6" style={{fontFamily: 'Coda, sans-ser'}}>Software/Aerospace Engineer</Typography>
                    <hr/>
                    <Grid container>
                      <Grid item xs={3}>
                        <p style={{textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em"}}>Email:</p>
                        <p style={{textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em"}}>City:</p>
                      </Grid>
                      <Grid item xs={9}>
                        <p style={{textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em"}}>c2rojas75@gmail.com</p>
                        <p style={{textAlign: "left", marginBlockStart: "0.5em", marginBlockEnd: "0.5em"}}>San Diego, California</p>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} spacing={2}>
                        <a href="https://www.linkedin.com/in/carlos-rojas-9b1b9a112/"><LinkedInIcon style={{ fontSize: 60 }}/></a>  

                        <a href="https://github.com/Carlos-Rojas-CA"><GitHubIcon className="git" style={{ fontSize: 60, }}/></a>

                        <a href="https://angel.co/carlos-rojas-24"> <img src="https://img.icons8.com/windows/64/000000/angelist.png"/></a>
                        
                      </Grid>
                    </Grid>
                    
                  </Grid>
                </Grid>

              </Container>
            </Grid>
          </Grid>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React.
        </a>

        </AppBarScroll>
        {/* </ThemeProvider> */}
      </header>
    </div>
  );
}

export default App;
