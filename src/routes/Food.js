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
        ampm,
        deadlineHours,
        deadlineMinutes,
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
      deadlineClass1,
      deadlineClass2,
    } = styles;
    return (
      <Container className={foodDiv}>
        <GoToPrevPage />
        <Container>
          <Card border="light" bg="light" style={{ width: "21.3rem" }}>
            <Card.Img
              className={`${img}`}
              alt="food-img"
              variant="top"
              src={fileURL}
            />
            <Card.Body>
              <div className={`${detail} ${menuClass}`}>{menu}</div>
              <Card.Subtitle
                className={`${detail} ${placeClass} mb-2 text-muted`}
              >
                {place}
              </Card.Subtitle>
              <div className={`${detail} ${addressClass}`}>{address}</div>
              <div className={`${detail} ${prevPriceClass}`}>
                원가 : {Number(`${prevPrice}`).toLocaleString("en")}원
              </div>
              <div className={`${detail} ${saledPriceClass}`}>
                할인가 : {Number(`${saledPrice}`).toLocaleString("en")}원
              </div>
              <div>
                <span className={`${deadlineClass1}`}>마감시간 : </span>
                <span
                  className={`${deadlineClass2}`}
                >{`${ampm} ${deadlineHours}:${deadlineMinutes}`}</span>
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
          ampm={ampm}
          deadlineHours={deadlineHours}
          deadlineMinutes={deadlineMinutes}
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
