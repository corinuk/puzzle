import styles from "components/Header.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import Logout from "./LogoutBtn";
// import UploadBtn from "./UploadBtn";

function Header() {
  const { logo, titleAll, subtitle, title, titles, index, btn } = styles;

  return (
    <div className={titleAll}>
      <Row>
        <Col xs={4} className={logo}>
          <img
            alt="퍼즐!(puzzle)"
            src="https://www.creativefabrica.com/wp-content/uploads/2018/11/Puzzle-piece-by-akaisredinjapan-5-580x386.jpg"
            width="70px"
            height="70px"
          />
        </Col>
        <Col xs={4} className={titles}>
          <div className={subtitle}>퍼주는 즐거움,</div>
          <div className={title}>Puzzle!</div>
        </Col>
        <Col xs={4} className={index}>
          <Button variant="success" className={btn} size="sm">
            about us
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
