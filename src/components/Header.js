import styles from "components/Header.module.css";

function Header() {
  const { home, category, upload } = styles;

  return (
    <div className={home}>
      <h1>ssssss</h1>
      <input type="button" value="카테고리" className={category} />
      <input type="button" value="올리기" className={upload} />
    </div>
  );
}

export default Header;
