import PropTypes from "prop-types";
import styles from "components/Item.module.css";
import { Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Item({
  id,
  menu,
  place,
  address,
  prevPrice,
  saledPrice,
  deadline,
  fileURL,
  createdAt,
  fileURL_stack,
}) {
  const {
    link,
    img,
    item,
    details,
    menuClass,
    placeClass,
    addressClass,
    prevPriceClass,
    saledPriceClass,
    deadlineClass,
  } = styles;

  return (
    <Link
      to={`/food`}
      state={{
        id,
        menu,
        place,
        address,
        prevPrice,
        saledPrice,
        deadline,
        createdAt,
        fileURL,
        fileURL_stack,
      }}
      className={link}
    >
      <Stack>
        <Container>
          <Row>
            <Container className={item}>
              <img alt="img" className={img} src={fileURL} />
              <div className={details}>
                <span className={`${menuClass}`}>{menu}</span>
                <span className={`${placeClass}`}>{place}</span>
                <span className={`${addressClass}`}>{address}</span>
                <span className={`${prevPriceClass}`}>
                  원가 : {Number(`${prevPrice}`).toLocaleString("en")}원
                </span>
                <span className={`${saledPriceClass}`}>
                  할인가 : {Number(`${saledPrice}`).toLocaleString("en")}원
                </span>
                <span className={`${deadlineClass}`}>
                  마감시간 : {deadline}
                </span>
              </div>
            </Container>
          </Row>
        </Container>
      </Stack>
    </Link>
  );
}

Item.propTypes = {
  menu: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  prevPrice: PropTypes.number.isRequired,
  saledPrice: PropTypes.number.isRequired,
};

export default Item;
