import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/AppBar"; // 헤더 컴포넌트

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/*공통 헤어*/}
      <Header />

      {/* 공통 마진 및 여백 */}
      <Box sx={{ px: "120px", py: 4 }}>
        <Outlet /> {/* 여기서 각 페이지가 렌더링됨 */}
      </Box>
    </Box>
  );
}
