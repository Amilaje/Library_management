import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";

export default function CoverPreview({ url }) {
  const [error, setError] = useState(false);

  return (
    <Paper
      variant="outlined"
      sx={{
        width: 360,
        height: 360,
        borderStyle: "dashed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}>
      {!url ? (
        <Typography variant="subtitle1">표지 미리보기</Typography>
      ) : error ? (
        <Typography variant="subtitle1">이미지 로드 실패</Typography>
      ) : (
        <img
          src={url}
          alt="표지"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={() => {
            setError(true);
          }}
        />
      )}
    </Paper>
  );
}
