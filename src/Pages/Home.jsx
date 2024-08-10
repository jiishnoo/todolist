import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import InsertNote from "../Components/Notes/InsertNote";
import NoteCard from "../Components/Notes/NoteCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NoNotes from "../Components/Notes/NoNotes";
export default function Home({
  setOpenSnackBar,
  setOpenSnackBarMessage,
  setOpenSnackBarSeverity,
}) {
  let initialNotes;
  if (localStorage.getItem("NoteData") == null) {
    initialNotes = [];
  } else {
    initialNotes = JSON.parse(localStorage.getItem("NoteData"));
  }
  const [allNotes, setAllNotes] = useState(initialNotes);
  const [state, setState] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("NoteData") != null) {
      setAllNotes(JSON.parse(localStorage.getItem("NoteData")));
    }
  }, [state]);
  const filtered = allNotes.filter((item) => item?.status == "new");
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "yellow",
          height: "20vh",
        }}
      >
        <InsertNote
          allNotes={allNotes}
          setAllNotes={setAllNotes}
          setState={setState}
          state={state}
          setOpenSnackBar={setOpenSnackBar}
          setOpenSnackBarMessage={setOpenSnackBarMessage}
          setOpenSnackBarSeverity={setOpenSnackBarSeverity}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "green",
        }}
      >
        <Box sx={{ flexGrow: 1, p: 1 }}>
          <Grid container spacing={2}>
            {filtered?.length > 0 ? (
              filtered.map((note, index) => (
                <Grid item xs={3} key={index}>
                  <NoteCard
                    note={note}
                    setState={setState}
                    state={state}
                    index={index}
                    allNotes={allNotes}
                    setAllNotes={setAllNotes}
                    setOpenSnackBar={setOpenSnackBar}
                    setOpenSnackBarMessage={setOpenSnackBarMessage}
                    setOpenSnackBarSeverity={setOpenSnackBarSeverity}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <NoNotes />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
