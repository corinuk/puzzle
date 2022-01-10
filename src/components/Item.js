import PropTypes from "prop-types";
import styles from "components/Item.module.css";
import { Link } from "react-router-dom";

function Item({
  id,
  menu,
  place,
  address,
  prevPrice,
  saledPrice,
  deadline,
  fileURL,
}) {
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
    deadlineClass,
  } = styles;

  return (
    <Link
      to={`/food`}
      state={{
        menu,
        place,
        address,
        prevPrice,
        saledPrice,
        deadline,
        fileURL,
      }}
      className={link}
    >
      <div className={item}>
        <img alt="img" className={img} src={fileURL} />
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
          <span className={`${detail} ${deadlineClass}`}>
            마감시간 : {deadline}
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
