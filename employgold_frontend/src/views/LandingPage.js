import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useTheme } from "@mui/system";

export default function LandingPage() {
  const theme = useTheme();

  return (
    <Box
      className="landingPage"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="100%" display="flex" alignItems="center" p={2}>
        <Box
          sx={{ typography: "h3", fontFamily: "Wire One", fontWeight: 700 }}
          ml={8}
          color={theme.palette.primary.main}
        >
          EmployGold
        </Box>
        <Box flex={1} />
        <Box display="flex" gap={2} mr={8}>
          <Button
            sx={{ typography: "body1" }}
            LinkComponent={Link}
            to="/sign-up"
          >
            Join Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              typography: "body1",
            }}
            LinkComponent={Link}
            to="sign-in"
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Box
        flex={1}
        width="80%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height="100%"
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img width="80%" src="images/work.svg" alt="home" />
        </Box>

        <Box
          height="100%"
          flex={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box sx={{ typography: "h4" }}>Find your next job here.</Box>
          <Box sx={{ typography: "h5" }} mt={2}>
            The best in talent & employer matching
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
