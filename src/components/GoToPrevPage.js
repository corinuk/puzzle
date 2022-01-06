import styles from "components/GoToPrevPage.module.css";
import { useNavigate } from "react-router-dom";

function GoToPrevPage() {
  const { backBtn } = styles;
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={backBtn}>
      &lt;&nbsp;&nbsp;뒤로가기
    </button>
  );
}
export default GoToPrevPage;
