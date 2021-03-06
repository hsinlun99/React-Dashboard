import './App.css';
import { useState } from 'react';
import * as React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { AppBar } from '@mui/material'
import { Toolbar}  from '@mui/material';
import { Typography } from '@mui/material';
import { UserData } from "./Data";
import LineChart from "./components/LineChart";


function App() {
  let tsmcData = [];
  let asmlData = [];
  console.log("UserData: ", UserData)

  for (let index = 0; index < UserData.length; index++) {
    switch (UserData[index].company) {
      case "TSMC":
        tsmcData.push(UserData[index]);
        break;
      case "ASML":
        asmlData.push(UserData[index]);
        break;
    
      default:
        break;
    }
  }

  console.log("tsmc: ", tsmcData, ", asml: ", asmlData)


  const [userData, setUserData] = useState({
    labels: [2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "TSMC",
        data: tsmcData.map((data) => data.count),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
      {
        label: "ASML",
        data: asmlData.map((data) => data.count),
        backgroundColor: [
          "red",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });

  return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NYCU Cloud Native Development
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Box marginTop={3} >
            <LineChart chartData={userData} />
          </Box>
        </Container>
      </Box>
  );
}

export default App;
