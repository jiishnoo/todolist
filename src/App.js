import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Trash from "./Pages/Trash";
import { Box, CssBaseline, styled } from "@mui/material";
import Navbar from "./Components/NavBar/Navbar";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import backgroundImage from "../src/blue.jpg"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
function App() {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openSnackBarMessage, setOpenSnackBarMessage] = useState("");
  const [openSnackBarSeverity, setOpenSnackBarSeverity] = useState("success");

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };
  return (
    <div>
      <BrowserRouter>
        
        <Box
          sx={{
            display: "flex",
            backgroundImage: `url(${backgroundImage})`, // Apply the background image
            backgroundSize: "cover", // Cover the entire area
            backgroundPosition: "center", // Center the background image
            minHeight: "100vh", // Ensure the background covers the whole viewport height
          }}
        >
          <CssBaseline />
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
            <DrawerHeader />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    setOpenSnackBar={setOpenSnackBar}
                    setOpenSnackBarMessage={setOpenSnackBarMessage}
                    setOpenSnackBarSeverity={setOpenSnackBarSeverity}
                  />
                }
              />
              <Route
                exact
                path="/Trash"
                element={
                  <Trash
                    setOpenSnackBar={setOpenSnackBar}
                    setOpenSnackBarMessage={setOpenSnackBarMessage}
                    setOpenSnackBarSeverity={setOpenSnackBarSeverity}
                  />
                }
              />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={openSnackBarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {openSnackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
