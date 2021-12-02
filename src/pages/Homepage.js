import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Box, Button, Container, Paper, Stack, Toolbar, Typography } from "@mui/material";

// TODO: write component that wraps a screen or frame or ...

export default function Homepage() {
  return (
    <Box sx={{
      backgroundColor: "black", backgroundImage: "url(/background.svg), url(/background2.svg)",
      backgroundRepeat: "no-repeat, repeat-y", backgroundPosition: "center top, center bottom"
    }}>
      <AppBar sx={{ backgroundColor: "transparent", pl: 18, pr: 18 }} elevation={0}>
        <Toolbar sx={{ display: "flex", height: 140 }}>
          <Box sx={{ textAlign: "center" }}>
            <img src="/icon.svg" />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={5}>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Home</Typography>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Insert Code</Typography>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Sign In</Typography>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Contact</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ height: "400px" }} />
      <Container maxWidth="xl" >
        <Box>
          <Stack spacing={-1.5}>
            <Typography variant="h1" color="white" sx={{ fontFamily: "Source Sans Pro" }}>YOUR</Typography>
            <Typography variant="h1" color="white" sx={{ fontFamily: "Source Sans Pro" }}>PLAN</Typography>
            <Typography variant="h1" color="white" sx={{ fontFamily: "Source Sans Pro" }}>TODAY</Typography>
          </Stack>
          <Button variant="outlined" sx={{
            width: "100px", color: "white",
            border: "1px solid white", borderRadius: "18px", pl: "5px", pr: "5px", mt: "10px"
          }}>
            JOIN NOW
          </Button>1
        </Box>

      </Container>
      <Container maxWidth="xl" sx={{ height: "120px" }} />
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" sx={{
          border: "1px white solid", borderRadius: "50%", minWidth: 50,
          maxWidth: 50, maxHeight: 50, minHeight: 50, color: "white", padding: "0px"
        }}>
          <KeyboardArrowDownIcon />
        </Button>
      </Container>
      <Container maxWidth="xl" sx={{ height: "250px" }} />
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "300px", height: "300px", backgroundColor: "red" }}>
          <img src="/dash.png" />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Stack>
          <Typography variant="h1" color="white" sx={{ fontFamily: "Source Sans Pro" }}>BETTER</Typography>
          <Typography variant="h1" sx={{ ml: 30, fontFamily: "Source Sans Pro" }} color="white">FASTER</Typography>
          <Typography variant="h1" sx={{ ml: 60, fontFamily: "Source Sans Pro" }} color="white">EASIER</Typography>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ height: "1000px" }} />
      <Container maxWidth="xl">
        <Paper sx={{
          display: "flex", alignItems: "center", backgroundColor: "black", height: 130, pl: 10, pr: 10,
          borderRadius: "40px"
        }}>
          <Box sx={{ textAlign: "center" }}>
            <img src="/icon.svg" height="70px" />
          </Box>
          <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>YOUR TEAM</Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", color: "gray", fontFamily: "Source Sans Pro" }}>info@TK.com</Typography>
          <Stack direction="row" spacing={5}>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Cookies</Typography>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Privacy</Typography>
            <Typography variant="h6" sx={{ color: "gray", fontFamily: "Source Sans Pro" }}>Terms of use</Typography>
          </Stack>
        </Paper>
      </Container>
      <Container maxWidth="xl" sx={{ height: "50px" }} />
    </Box >
  )
}