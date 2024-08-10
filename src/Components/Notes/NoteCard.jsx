import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import backgroundImage from './../Notes/sea.jpg'
import RestoreIcon from '@mui/icons-material/Restore';

export default function NoteCard({
  note,
  setState,
  state,
  allNotes,
  setAllNotes,
  trash,
  setOpenSnackBar,
  setOpenSnackBarMessage,
  setOpenSnackBarSeverity,
}) {
  const handleChangeStatusToDeleted = () => {
    const index = allNotes.findIndex((n) => n.id === note.id);
    const updatedNote = { ...note, status: "deleted" };
    const updatedAllNotes = [...allNotes];
    updatedAllNotes.splice(index, 1, updatedNote);
    localStorage.setItem("NoteData", JSON.stringify(updatedAllNotes));
    setOpenSnackBar(true);
    setOpenSnackBarMessage("Note has been moved to trash!");
    setOpenSnackBarSeverity("error");
    setAllNotes(updatedAllNotes);
    setState(!state);
  };
  const handleChangeStatusToNew = () => {
    const index = allNotes.findIndex((n) => n.id === note.id);
    const updatedNote = { ...note, status: "new" };
    const updatedAllNotes = [...allNotes];
    updatedAllNotes.splice(index, 1, updatedNote);
    localStorage.setItem("NoteData", JSON.stringify(updatedAllNotes));
    setAllNotes(updatedAllNotes);
    setOpenSnackBar(true);
    setOpenSnackBarSeverity("success");
    setOpenSnackBarMessage("Note has been restored!");
    setState(!state);
  };
  const handleDelete = () => {
    const filtered = allNotes?.filter((item) => item.id != note.id);
    localStorage.setItem("NoteData", JSON.stringify(filtered));
    setOpenSnackBar(true);
    setOpenSnackBarMessage("Note has been deleted permanently!");
    setOpenSnackBarSeverity("error");
    setAllNotes(filtered);
    setState(!state);
  };
  return (
    <Paper sx={{ p: 2 }} elevation={3}>
       <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`, // Apply the background image
      backgroundSize: 'cover', // Ensure the image covers the entire box
      backgroundPosition: 'center', // Center the image
      p: 8, // Add padding for content inside the box
    }}
  >
        <Typography
      sx={{
        fontSize: '1.25rem', // Font size
        fontWeight: 'bold', // Font weight
        fontFamily: 'Trebuchet MS, sans-serif', // Font family
        color: 'white', // Text color
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional: Add a shadow for better readability
      }}
    >
          
          {note?.note}</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {trash ? (
          <Box>
            <Tooltip title="Restore" arrow>
              <IconButton color="success" onClick={handleChangeStatusToNew}>
                <RestoreIcon sx={{color:"grey"}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" arrow>
              <IconButton color="error" onClick={handleDelete}>
                <DeleteOutlineIcon sx={{color:"yellowred"}} />
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          <IconButton onClick={handleChangeStatusToDeleted}>
            <DeleteOutlineIcon sx={{ fontSize: "25px", color:"lightred" }}  />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
}
