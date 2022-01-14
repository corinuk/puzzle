import GoToPrevPage from "components/GoToPrevPage";
import { useLocation } from "react-router-dom";
import styles from "components/Food.module.css";
import ReservationForm from "components/ReservationForm";
import CompleteReserv from "components/CompleteReserv";

function Food() {
  try {
    const location = useLocation();
    const {
      state: {
        id,
        menu,
        place,
        address,
        prevPrice,
        saledPrice,
        deadline,
        fileURL,
        createdAt,
      },
    } = location;

    const {
      foodDiv,
      img,
      detail,
      menuClass,
      placeClass,
      addressClass,
      prevPriceClass,
      saledPriceClass,
      deadlineClass,
    } = styles;
    return (
      <div className={foodDiv}>
        <GoToPrevPage />
        <img className={`${img}`} alt="food-img" src={fileURL} />
        <h3 className={`${detail} ${menuClass}`}>{menu}</h3>
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
        <ReservationForm
          id={id}
          menu={menu}
          place={place}
          address={address}
          prevPrice={prevPrice}
          saledPrice={saledPrice}
          deadline={deadline}
          createdAt={createdAt}
        />
      </div>
    );
  } catch (err) {
    // "Cannot read properties of null (reading 'menu')"
    return <CompleteReserv />;
  }
  // return <CompleteReserv />;
}

export default Food;
