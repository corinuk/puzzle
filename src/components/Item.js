import PropTypes from "prop-types";
import styles from "components/Item.module.css";
import { Link } from "react-router-dom";

function Item({ foodImg, menu, place, address, prevPrice, saledPrice }) {
  const {
    link,
    img,
    item,
    details,
    detail,
    menuClass,
    placeClass,
    addressClass,
    prevPriceClass,
    saledPriceClass,
  } = styles;

  return (
    <Link to={`/food`} className={link}>
      <div className={item}>
        <img
          alt="img"
          className={img}
          src="https://i.stack.imgur.com/BwiAz.png"
          // src={foodImg}
        />
        <div className={details}>
          <span className={`${detail} ${menuClass}`}>{menu}</span>
          <span className={`${detail} ${placeClass}`}>{place}</span>
          <span className={`${detail} ${addressClass}`}>{address}</span>
          <span className={`${detail} ${prevPriceClass}`}>
            원가 : {Number(`${prevPrice}`).toLocaleString("en")}원
          </span>
          <span className={`${detail} ${saledPriceClass}`}>
            할인가 : {Number(`${saledPrice}`).toLocaleString("en")}원
          </span>
        </div>
      </div>
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
