import { Link } from "react-router-dom";
import styles from "components/CompleteReserv.module.css";

function CompleteReserv() {
  const { complete } = styles;

  return (
    <div>
      <div className={complete}>
        <span>예약완료</span>
        <span>예약 해주셔서 ㄱㅅㄱㅅ</span>
        <span>님이 주신 번호로 연락 갈거 ㅅㄱㅅㄱ</span>
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
