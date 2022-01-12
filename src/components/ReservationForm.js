import axios from "axios";
import styles from "components/ReservationForm.module.css";

function ReservationForm() {
  const { reservationForm, phoneNumClass, time, submitBtn } = styles;

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { parentNode },
    } = event;
    const present = new Date();
    const year = present.getFullYear();
    const month = present.getMonth() + 1;
    const day = present.getDate();
    const hour = present.getHours();
    const minute = present.getMinutes();
    const second = present.getSeconds();
    const menu = parentNode.parentNode.children[2].innerHTML;
    const place = parentNode.parentNode.children[3].innerHTML;
    const address = parentNode.parentNode.children[4].innerHTML;
    const prevPrice = parentNode.parentNode.children[5].innerHTML;
    const saledPrice = parentNode.parentNode.children[6].innerHTML;
    const deadline = parentNode.parentNode.children[7].innerHTML;
    const pickupTime = parentNode[1].value;
    const phoneNum = parentNode[0].value;

    const data = `${year}년${month}월${day}일 ${hour}:${minute}:${second}\n${menu}\n${place}\n${address}\n${prevPrice}\n${saledPrice}\n${deadline}\n${pickupTime}\n${phoneNum}`;
    const url = process.env.REACT_APP_SLACK_WEBHOOK_URL;
    try {
      const result = await axios({
        method: "post",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: data,
              },
            },
          ],
        },
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={reservationForm} onSubmit={onSubmit} method="POST">
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
