import { CircularProgress, Paper, Typography } from "@mui/material";
import { useState } from "react";

export default function CoverPreview({ url }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Paper
      variant="outlined"
      sx={{
        width: 374,
        height: 374,
        borderStyle: "dashed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}>
      {!url ? (
        <Typography variant="subtitle1">AI 표지</Typography>
      ) : error ? (
        <Typography variant="subtitle1">이미지 로드 실패</Typography>
      ) : (
        <>
          {loading && <CircularProgress />}
          <img
            src={url}
            alt="생성된 표지 이미지"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: loading ? "none" : "block",
            }}
            onLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setError(true);
            }}
          />
        </>
      )}
    </Paper>
  );
}
