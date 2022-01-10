import styles from "components/ReservationForm.module.css";

function ReservationForm() {
  const { reservationForm, phoneNum, time, submitBtn } = styles;

  return (
    <form className={reservationForm}>
      <label>휴대폰 번호를 입력해주세요 ( - 제외 )</label>
      <input
        id="phone-num"
        type="text"
        placeholder="휴대폰 번호"
        className={phoneNum}
      />
      <label>픽업하실 시간을 입력해주세요</label>
      <select id="time" className={time}>
        <option>10분뒤</option>
        <option>20분뒤</option>
        <option>30분뒤</option>
      </select>
      <input type="button" className={submitBtn} value="예약하기" />
    </form>
  );
}

export default ReservationForm;
