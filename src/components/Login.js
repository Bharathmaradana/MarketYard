import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom'
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
   
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
 const navigate = useNavigate();
  const [admin, setAdmin] = useState("block");
  const [user, setUser] = useState("none");
  setTimeout("", 5000);
  function contentdisplayadmin() {
    setAdmin("");
    setUser("none");
  }
  function contentdisplayuser() {
    setAdmin("none");
    setUser("block");
  }

  const [data, setdata] = useState({ email: "", password: "" });
  const submitdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);

   
  };
  const done = () => {
    axios.post("http://localhost:5004/Login", data).then((res) => {
      console.log(res.data);
      navigate("/farmer");
    });
  };
  return (
    <div>
      {/* <div className='logincaption' style={{ width: '100%', fontSize: '50px', marginTop: '50px' }}>
                <b>Caption</b>
            </div> */}
      <div className="loginpage">
        <div className="loginchild" style={{ display: admin }}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar> */}
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                {/* <Button className='buttons'>Admin</Button> <Button className='buttons'>User</Button> */}
                <ButtonGroup
                  variant="text"
                  aria-label="text button group"
                  style={{ margin: "20px 0px 15px 0px" }}
                >
                  <Button
                    className="specialbuttons"
                    style={{
                      borderBottom: "2px solid #1976d2",
                      borderRadius: "0px",
                    }}
                  >
                    <b>Farmer</b>
                  </Button>
                  <Button
                    className="specialbuttons"
                    onClick={contentdisplayuser}
                  >
                    <b>Customer</b>
                  </Button>
                </ButtonGroup>
                <Box noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Kisan Id"
                    name="email"
                    autoFocus
                    onChange={submitdata}
                    value={data.email}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={submitdata}
                    value={data.password}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={done}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
        <div className="loginchild" style={{ display: user }}>
          <ThemeProvider theme={theme} className="loginchild">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar> */}
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                {/* <Button className='buttons'>Admin</Button> <Button className='buttons'>User</Button> */}
                <ButtonGroup
                  variant="text"
                  aria-label="text button group"
                  style={{ margin: "20px 0px 15px 0px" }}
                >
                  <Button
                    className="specialbuttons"
                    onClick={contentdisplayadmin}
                  >
                    <b>Farmer</b>
                  </Button>
                  <Button
                    className="specialbuttons"
                    style={{
                      borderBottom: "2px solid #1976d2",
                      borderRadius: "0px",
                    }}
                  >
                    <b>Customer</b>
                  </Button>
                </ButtonGroup>
                <Box noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Phone Number"
                    name="email"
                    autoComplete="email"
                    onChange={submitdata}
                    value={data.email}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={submitdata}
                    value={data.password}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={done}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
