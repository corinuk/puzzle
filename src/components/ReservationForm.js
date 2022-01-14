import axios from "axios";
import styles from "components/ReservationForm.module.css";
import { useState } from "react";

function ReservationForm({
  menu,
  place,
  address,
  prevPrice,
  saledPrice,
  deadline,
}) {
  const { reservationForm, phoneNumClass, time, submitBtn } = styles;

  return (
    <form
      name="contact"
      className={reservationForm}
      method="POST"
      data-netlify="true"
      // onSubmit={(e) => onSubmit(e)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="menu" value={menu} />
      <input type="hidden" name="place" value={place} />
      <input type="hidden" name="address" value={address} />
      <input type="hidden" name="prevPrice" value={prevPrice} />
      <input type="hidden" name="saledPrice" value={saledPrice} />
      <input type="hidden" name="deadline" value={deadline} />
      <p>
        <label htmlFor="phone">
          휴대폰 번호를 입력해주세요 ( - 제외 )
          <br />
          <input
            name="phone"
            required
            id="phone"
            type="number"
            placeholder="휴대폰 번호"
            className={phoneNumClass}
          />
        </label>
      </p>
      <p>
        <label htmlFor="time">
          픽업하실 시간을 입력해주세요
          <br />
          <select name="time" id="time" className={time}>
            <option>10분뒤</option>
            <option>20분뒤</option>
            <option>30분뒤</option>
          </select>
        </label>
      </p>
      <p>
        <input
          type="submit"
          className={submitBtn}
          value="예약하기"
          // onClick={onSubmit}
        />
      </p>
    </form>
  );
}

export default ReservationForm;

//삽질의 흔적
// const onSubmit = async (event) => {
//   event.preventDefault();
//   const {
//     target: { parentNode },
//   } = event;
//   const present = new Date();
//   const year = present.getFullYear();
//   const month = present.getMonth() + 1;
//   const day = present.getDate();
//   const hour = present.getHours();
//   const minute = present.getMinutes();
//   const second = present.getSeconds();
//   const menu = parentNode.parentNode.parentNode.children[2].innerHTML;
//   const place = parentNode.parentNode.parentNode.children[3].innerHTML;
//   const address = parentNode.parentNode.parentNode.children[4].innerHTML;
//   const prevPrice = parentNode.parentNode.parentNode.children[5].innerHTML;
//   const saledPrice = parentNode.parentNode.parentNode.children[6].innerHTML;
//   const deadline = parentNode.parentNode.parentNode.children[7].innerHTML;
//   const pickupTime = parentNode.parentNode[1].value;
//   const phoneNum = parentNode.parentNode[0].value;

//   const data = `${year}년${month}월${day}일 ${hour}:${minute}:${second}\n${menu}\n${place}\n${address}\n${prevPrice}\n${saledPrice}\n${deadline}\n${pickupTime}\n${phoneNum}`;
//   // const data = {
//   //   text: `${year}년${month}월${day}일 ${hour}:${minute}:${second}\n${menu}\n${place}\n${address}\n${prevPrice}\n${saledPrice}\n${deadline}\n${pickupTime}\n${phoneNum}`,
//   // };
//   const url = process.env.REACT_APP_SLACK_WEBHOOK_URL;
//   console.log("404 ???");
//   // const res = await axios.post(url, JSON.stringify(data), {
//   //   withCredentials: true,
//   //   transformRequest: [
//   //     (data) => {
//   //       return data;
//   //     },
//   //   ],
//   // });
//   // console.log(res);
//   try {
//     const result = await axios({
//       method: "post",
//       url,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         blocks: [
//           {
//             type: "section",
//             text: {
//               type: "mrkdwn",
//               text: data,
//             },
//           },
//         ],
//       },
//     });
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.error(err);
//   }
// };
