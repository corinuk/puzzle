import GoToPrevPage from "components/GoToPrevPage";
import { useLocation } from "react-router-dom";
import styles from "routes/Food.module.css";
import ReservationForm from "components/ReservationForm";
import CompleteReserv from "components/CompleteReserv";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// import PhoneAuth from "components/PhoneAuth";

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
        createdAt,
        fileURL,
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
      <Container className={foodDiv}>
        <GoToPrevPage />
        <Container>
          <Card border="light" bg="light">
            <Card.Img
              className={`${img}`}
              alt="food-img"
              variant="top"
              src={fileURL}
            />
            <Card.Body>
              <div className={`${detail} ${menuClass}`}>{menu}</div>
              <div className={`${detail} ${placeClass}`}>{place}</div>
              <div className={`${detail} ${addressClass}`}>{address}</div>
              <div className={`${detail} ${prevPriceClass}`}>
                원가 : {Number(`${prevPrice}`).toLocaleString("en")}원
              </div>
              <div className={`${detail} ${saledPriceClass}`}>
                할인가 : {Number(`${saledPrice}`).toLocaleString("en")}원
              </div>
              <div className={`${detail} ${deadlineClass}`}>
                마감시간 : {deadline}
              </div>
            </Card.Body>
          </Card>
        </Container>
        <ReservationForm
          id={id}
          menu={menu}
          place={place}
          address={address}
          prevPrice={prevPrice}
          saledPrice={saledPrice}
          deadline={deadline}
          createdAt={createdAt}
          fileURL={fileURL}
        />
      </Container>
    );
  } catch (err) {
    return <CompleteReserv />;
  }
}

export default Food;
