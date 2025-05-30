import { useParams } from "react-router-dom";

export default function View() {
    const { id } = useParams();
    return <div>{id}번 도서 세부 페이지입니다</div>;
}