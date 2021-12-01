import { AppBar, Paper, Stack, Toolbar, Typography, Button, Box, Container } from "@mui/material";

export default function Homepage() {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <AppBar sx={{ backgroundColor: "transparent", paddingLeft: 10, paddingRight: 10 }} elevation={0}>
        <Toolbar sx={{ display: "flex", height: 140 }}>
          <Box sx={{ width: 170, height: 60, backgroundColor: "red", textAlign: "center" }}>
            icon
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={5}>
            <Typography sx={{ color: "gray" }}>Home</Typography>
            <Typography sx={{ color: "gray" }}>Insert Code</Typography>
            <Typography sx={{ color: "gray" }}>Sign In</Typography>
            <Typography sx={{ color: "gray" }}>Contact</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ height: "400px" }} />
      <Container maxWidth="xl" >
        <Stack>
          <Typography variant="h1" color="white">YOUR</Typography>
          <Typography variant="h1" color="white">PLAN</Typography>
          <Typography variant="h1" color="white">TODAY</Typography>
          <Button variant="contained" sx={{ width: 150 }}>Join now</Button>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ height: "100px" }} />
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "50px", height: "50px", backgroundColor: "red" }}>
          scroll
        </Box>
      </Container>
      <Container maxWidth="xl" sx={{ height: "250px" }} />
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <Box sx={{ width: "300px", height: "300px", backgroundColor: "red" }}>
          dash icon
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Stack>
          <Typography variant="h1" color="white">BETTER</Typography>
          <Typography variant="h1" sx={{ ml: 30 }} color="white">FASTER</Typography>
          <Typography variant="h1" sx={{ ml: 60 }} color="white">EASIER</Typography>
        </Stack>
      </Container>
      <Container maxWidth="xl" sx={{ height: "1000px" }} />
      <Container maxWidth="xl">
        <Paper sx={{
          display: "flex", alignItems: "center", backgroundColor: "blue", height: 110, pl: 10, pr: 10
        }}>
          <Box sx={{ width: 100, height: 50, backgroundColor: "red", textAlign: "center" }}>
            icon
          </Box>
          <Typography sx={{ marginLeft: 3, color: "gray" }} variant="h6">YOUR TEAM</Typography>
          <Typography sx={{ flexGrow: 1, textAlign: "center", color: "gray" }}>info@TK.com</Typography>
          <Stack direction="row" spacing={5}>
            <Typography sx={{ color: "gray" }}>Cookies</Typography>
            <Typography sx={{ color: "gray" }}>Privacy</Typography>
            <Typography sx={{ color: "gray" }}>Terms of use</Typography>
          </Stack>
        </Paper>
      </Container>
      <Container maxWidth="xl" sx={{ height: "80px" }} />
    </Box>
  )
}