import { Box, Typography } from "@mui/material";
import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function NoNotes({ trash }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //   backgroundColor: "yellow",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <EventNoteIcon sx={{ fontSize: 150, opacity: "50%" }} />
      {trash ? (
        <Typography sx={{ fontWeight: "600" }} color="text.secondary">
          Notes that you deleted appear here
        </Typography>
      ) : (
        <Typography sx={{ fontWeight: "600" }} color="text.secondary">
          Notes that you add appear here
        </Typography>
      )}
    </Box>
  );
}
