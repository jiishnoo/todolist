import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
export default function InsertNote({
  setState,
  state,
  allNotes,
  setAllNotes,
  setOpenSnackBar,
  setOpenSnackBarMessage,
  setOpenSnackBarSeverity,
}) {
  const [formValue, setFormValue] = useState("");
  const [formError, setFormError] = useState(false);
  const handleChange = (e) => {
    setFormError(false);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (formValue?.note == "" || formValue?.note == null || !formValue?.note) {
      setFormError("Please enter a note");
    } else {
      console.log(formValue);
      const id =
        allNotes?.length == 0 ? 1 : allNotes[allNotes.length - 1].id + 1;
      const newNote = {
        id,
        note: formValue.note,
        status: "new",
      };
      setFormValue({ note: "" });
      const updatedNote = [...allNotes, newNote];
      localStorage.setItem("NoteData", JSON.stringify(updatedNote));
      setAllNotes(updatedNote);
      setOpenSnackBar(true);
      setOpenSnackBarMessage("New note added!");
      setOpenSnackBarSeverity("success");
      setState(!state);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <TextField
          onChange={handleChange}
          name="note"
          value={formValue?.note}
          error={formError}
          helperText={formError && formError}
          size="small"
          label="Make you note"
          fullWidth
          sx={{
            // backgroundColor: 'white', // Set background color to white
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'blue', // Optional: Set border color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Optional: Change border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'blue', // Optional: Change border color when focused
              },
            },
          }}
        />
      </Box>
      <Box>
        <Button
          onClick={handleSubmit}
          //   size="small"
          sx={{ p: 1 }}
          fullWidth
          variant=""
          startIcon={<SaveAltOutlinedIcon sx={{ width: 30, height: 30,color: '#ffffff' }} />}
        >
          
        </Button>
      </Box>
    </Box>
  );
}
