import { AppBar, Toolbar, Button, Box, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static" // 페이지 상단에 고정
      color="#ffffff"
      elevation={0} // 그림자 제거
      sx={{
        height: "100px", // 높이 고정
        justifyContent: "center", // 요소들 수직 가운데 정렬
      }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          position: "relative",
        }}>
        {/* 왼쪽: 홈 이미지 버튼 + 전체 목록 텍스트 버튼 */}
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton onClick={() => navigate("/")}>
            <img
              src="/assets/home_icon.png" // 홈 아이콘 경로
              alt="홈"
              style={{ height: "40px" }}
            />
          </IconButton>
          <Button variant="text" onClick={() => navigate("/list")}>
            전체 목록
          </Button>
        </Stack>
        {/* 중앙: 로고 이미지 */}
        <Box
          sx={{
            // 가운데 정렬
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <img
            src="/assets/logo.png" // 로고 이미지 경로
            alt="로고"
            style={{ height: "50px" }}
          />
        </Box>
        {/* 오른쪽: 새 도서 등록 버튼 */}
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/publish")}>
            새 도서 등록
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
