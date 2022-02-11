import { Link } from "react-router-dom";
import styles from "components/CompleteReserv.module.css";

function CompleteReserv() {
  const { complete } = styles;

  return (
    <div>
      <div className={complete}>
        <span>예약완료</span>
        <span>예약 해주셔서 감사합니다.</span>
        <span>작성해 주신 번호로 예약 정보가 전송됩니다.</span>
      </div>
      <div>
        <Link to={`/`}>
          <button>확인</button>
        </Link>
      </div>
    </div>
  );
}

export default CompleteReserv;
