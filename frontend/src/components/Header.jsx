//상단 네비게이션 바바


import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', borderBottom: '1px solid #ddd' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flex: '0 0 auto' }}>홈</Typography>
         {/* 홈 누르면 메인(/)으로 */}
         <Button
           component={Link}
           to="/"
           variant="text"
           sx={{
             textTransform: 'none',
             color: '#000',
             fontSize: '1rem',
             fontWeight: 'bold',
             mr: 2
           }}
         >
           홈
         </Button>
         <TextField
           placeholder="검색"
           size="small"
           variant="outlined"
           InputProps={{
             endAdornment: (
               <InputAdornment position="end">
                 <SearchIcon />
               </InputAdornment>
             )
           }}
           sx={{
             mx: 2,
             width: 300,            // 폭을 300px로 줄임
             bgcolor: '#f5f5f5',    // 밝은 회색
             borderRadius: 1
           }}
         />

           <Button
           component={Link}
           to="/publish"
           reloadDocument
           variant="contained"
           sx={{
             ml: 'auto',
             textTransform: 'none',
             bgcolor: '#26a69a',
             color: '#fff',
             borderRadius: '20px'
           }}
         >
          새 도서 등록
        </Button>
      </Toolbar>
    </AppBar>
  );
}