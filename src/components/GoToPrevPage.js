import styles from "components/GoToPrevPage.module.css";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { BsChevronDoubleLeft } from "react-icons/bs";

function GoToPrevPage() {
  const { backBtn } = styles;
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        onClick={() => navigate(-1)}
        className={backBtn}
        variant="outline-dark"
      >
        <BsChevronDoubleLeft />
      </Button>
    </Container>
  );
}
export default GoToPrevPage;
