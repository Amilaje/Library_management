import { Paper, Typography } from "@mui/material";

export default function BookContent({ content }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        maxHeight: 800,
        whiteSpace: "pre-wrap",
        overflowY: "auto",
        backgroundColor: "background.paper",
      }}>
      <Typography variant="body1">{content}</Typography>
    </Paper>
  );
}
