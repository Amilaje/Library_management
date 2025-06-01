import { AppBar, Toolbar, Button, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="#ffffff"
      elevation={0}
      sx={{
        height: "100px",
        py: 4,
        justifyContent: "center", // 오타 수정: ifyContent → justifyContent
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* 왼쪽: 전체 목록 버튼만 */}
        <Box>
          <Button variant="text" onClick={() => navigate("/list")}>
            전체 목록
          </Button>
        </Box>

        {/* 중앙: 로고 클릭 시 홈으로 이동 */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/assets/logo.png"
            alt="로고"
            style={{ height: "50px" }}
          />
        </Box>

        {/* 오른쪽: 새 도서 등록 */}
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => (window.location.href = "/publish")}
          >
            새 도서 등록
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
