import { Box, Button, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookContent from "../components/BookContent";
import BookFooter from "../components/BookFooter";
import BookHeader from "../components/BookHeader";
import axios from "../services/axios";

const View = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => {
        console.error("책 정보 로드 실패:", error);
        alert("책 정보를 불러오지 못했습니다.");
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await axios.delete(`/books/${id}`);
        alert("삭제되었습니다.");
        navigate("/", { replace: true });
      } catch (error) {
        console.error("삭제 실패:", error);
        alert("삭제에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const formatDate = (dateString) => dateString?.slice(0, 10) || "알 수 없음";

  if (!book) return <Container sx={{ py: 4 }}>로딩 중...</Container>;

  return (
    <Container sx={{ py: 4 }}>
      <Stack>
        {/* 책 표지 + 기본 정보 */}
        <Box sx={{ mb: 4 }}>
          <BookHeader book={book} />
        </Box>
        {/* 책 내용 */}
        <Box sx={{ mb: 2 }}>
          <BookContent content={book.content} />
        </Box>
        {/* 하단 정보 */}
        <Box sx={{ mb: 3 }}>
          <BookFooter createdAt={book.createdAt} updatedAt={book.updatedAt} />
        </Box>
        {/* 수정 및 삭제 버튼 */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={handleEdit}
              sx={{ borderRadius: "8px !important" }}>
              수정
            </Button>
            <Button
              variant="outlined"
              onClick={handleDelete}
              sx={{ borderRadius: "8px !important" }}>
              삭제
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default View;
