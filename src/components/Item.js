import PropTypes from "prop-types";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

function Item({ menu, foodImg, place, prevPrice, saledPrice }) {
  const { img } = styles;

  return (
    <Link to={`/food`}>
      <div>
        <img
          alt="img"
          className={img}
          src="https://i.stack.imgur.com/BwiAz.png"
        />
        <span>{menu}</span>
        <span>{place}</span>
        <span>{prevPrice}</span>
        <span>{saledPrice}</span>
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
