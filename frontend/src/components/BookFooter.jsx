import { Box, Typography } from "@mui/material";

export default function BookFooter({ createdAt, updatedAt }) {
  const formatDate = (date) => date?.slice(0, 10) || "알 수 없음";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
      <Typography variant="caption" color="text.secondary">
        작성일: {formatDate(createdAt)} / 수정일: {formatDate(updatedAt)}
      </Typography>
    </Box>
  );
}
