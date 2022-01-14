import { Link } from "react-router-dom";

function CompleteReserv() {
  return (
    <div>
      예약완료
      <div>
        <Link to={`/`}>
          <button>확인</button>
        </Link>
      </div>
    </div>
  );
}

export default CompleteReserv;
