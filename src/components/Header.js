import styles from "components/Header.module.css";
import Logout from "./LogoutBtn";
import UploadBtn from "./UploadBtn";

function Header() {
  const { home, upload, logout } = styles;

  return (
    <div className={home}>
      <h1>ssssss</h1>
      <UploadBtn className={upload} />
      <Logout className={logout} />
    </div>
  );
}

export default Header;
