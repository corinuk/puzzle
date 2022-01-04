import styles from "components/Header.module.css";

function Header() {
  const { home, category } = styles;

  return (
    <div className={home}>
      <h1>ssssss</h1>
      <input type="button" value="카테고리" className={category} />
    </div>
  );
}

export default Header;
