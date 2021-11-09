import { AppBar, Toolbar, Box, Grid, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const displayDesktop = () => {
    return (
      <header>
        <Toolbar>
          <Box
            sx={{
              typography: "h3",
              fontFamily: "Wire One",
              fontWeight: 700,
              cursor: "pointer",
            }}
            ml={8}
            color="white"
            onClick={() => navigate("/")}
          >
            EmployGold
          </Box>
          <Grid container justifyContent="flex-end">
            <Box sx={{ color: "white", cursor: "pointer" }} mr={3} pt={1}>
              Profile
            </Box>
            <Box sx={{ color: "white", cursor: "pointer" }} mr={3} pt={1}>
              Jobs
            </Box>
            <Box sx={{ color: "white", cursor: "pointer" }} mr={3} pt={1}>
              Matches
            </Box>
            <Box>
              <Avatar>H</Avatar>
            </Box>
          </Grid>
        </Toolbar>
      </header>
    );
  };

  return <AppBar position="static">{displayDesktop()}</AppBar>;
}
