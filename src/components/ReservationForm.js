import styles from "components/ReservationForm.module.css";
import axios from "axios";

function ReservationForm() {
  const { reservationForm, phoneNumClass, time, submitBtn } = styles;

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { parentNode },
    } = event;
    const menu = parentNode.parentNode.children[2].innerHTML;
    const place = parentNode.parentNode.children[3].innerHTML;
    const address = parentNode.parentNode.children[4].innerHTML;
    const prevPrice = parentNode.parentNode.children[5].innerHTML;
    const saledPrice = parentNode.parentNode.children[6].innerHTML;
    const deadline = parentNode.parentNode.children[7].innerHTML;
    const pickupTime = parentNode[1].value;
    const phoneNum = parentNode[0].value;
    console.log(menu);
    console.log(place);
    console.log(address);
    console.log(prevPrice);
    console.log(saledPrice);
    console.log(deadline);
    console.log(`예약 시간 : ${pickupTime}`);
    console.log(`예약자 번호 : ${phoneNum}`);
    const headers = { "Content-Type": "application/json" };
    try {
      const { data } = await axios({
        method: "post",
        url: "https://hooks.slack.com/services/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",
        headers,
        data: {
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                menu,
                place,
                address,
                prevPrice,
                saledPrice,
                deadline,
                pickupTime: `예약 시간 : ${pickupTime}`,
                phoneNum: `예약자 번호 : ${phoneNum}`,
              },
            },
          ],
        },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={reservationForm} onSubmit={onSubmit}>
      <label>휴대폰 번호를 입력해주세요 ( - 제외 )</label>
      <input
        required
        id="phone-num"
        type="number"
        placeholder="휴대폰 번호"
        className={phoneNumClass}
      />
      <label>픽업하실 시간을 입력해주세요</label>
      <select id="time" className={time}>
        <option>10분뒤</option>
        <option>20분뒤</option>
        <option>30분뒤</option>
      </select>
      <input
        type="button"
        className={submitBtn}
        value="예약하기"
        onClick={onSubmit}
      />
    </form>
  );
}

export default ReservationForm;
