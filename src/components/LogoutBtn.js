import { authService } from "fb";
import { Link } from "react-router-dom";

function Logout({ className }) {
  const onLogoutClick = () => authService.signOut();
  return (
    <Link to={`/upload`}>
      <input
        type="button"
        value="๋ก๊ทธ์์"
        className={className}
        onClick={onLogoutClick}
      />
    </Link>
  );
}

export default Logout;
