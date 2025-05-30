import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{
        height: "100px",  // 높이 고정
        justifyContent: "center",  // 수직 가운데 정렬
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 왼쪽: 홈 텍스트 링크 */}
        <Typography
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "primary.main",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >홈</Typography>
        {/* 오른쪽: 새 도서 등록 버튼 */}
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/publish")}
          >새 도서 등록</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
