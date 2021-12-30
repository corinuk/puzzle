import styles from "./Header.module.css";

function Header() {
  const { home, loginBtn, category } = styles;

  return (
    <div className={home}>
      <h1>ssssss</h1>
      <input type="button" value="로그인" className={loginBtn} />
      <input type="button" value="카테고리" className={category} />
    </div>
  );
}

export default Header;
