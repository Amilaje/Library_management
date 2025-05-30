import { useParams } from "react-router-dom";

export default function Edit() {
    const { id } = useParams();
    return <div>{id}번 도서 수정 페이지입니다</div>;
}