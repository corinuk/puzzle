import styles from "components/ReservationForm.module.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { dbService } from "fb";
import { addDoc, collection } from "firebase/firestore";
import { useRef, useState } from "react";

function ReservationForm({
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
}) {
  const {
    reservationForm,
    phoneNumClass,
    timeClass,
    submitBtn,
    phoneNum,
    pickupT,
  } = styles;
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const formRef = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const phoneNumber = event.target.parentNode.children[0][0].value;
    const pickupTime = event.target.parentNode.children[0][1].value;
    setTime(pickupTime);
    try {
      const createdAt_order = Date.now();
      await addDoc(collection(dbService, "orders"), {
        id,
        createdAt,
        createdAt_order,
      });
      await addDoc(collection(dbService, "ordered"), {
        menu,
        place,
        address,
        prevPrice,
        saledPrice,
        ampm,
        deadlineHours,
        deadlineMinutes,
        createdAt,
        createdAt_order,
        phoneNumber,
      });
      formRef.current.submit();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  const onChange = (event) => {
    if (event.target.id === "phone") {
      setPhone(event.target.value);
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} className={reservationForm}>
        <Form.Group>
          <Form.Label htmlFor="phone">
            <div className={phoneNum}>
              휴대폰 번호를 입력해주세요 ( - 제외 )
            </div>
            <input
              required
              id="phone"
              type="number"
              placeholder="휴대폰 번호"
              className={phoneNumClass}
              value={phone}
              onChange={onChange}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="time">
            <div className={pickupT}>픽업하실 시간을 입력해주세요</div>
            <select id="time" className={timeClass}>
              <option>10분뒤</option>
              <option>20분뒤</option>
              <option>30분뒤</option>
            </select>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <input
            type="submit"
            className={submitBtn}
            value="예약하기"
            onSubmit={onSubmit}
          />
        </Form.Group>
      </Form>
      <Form
        hidden
        id="submittingForm"
        name="contact"
        method="POST"
        data-netlify="true"
        ref={formRef}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="menu" value={menu} />
        <input type="hidden" name="place" value={place} />
        <input type="hidden" name="address" value={address} />
        <input type="hidden" name="prevPrice" value={prevPrice} />
        <input type="hidden" name="saledPrice" value={saledPrice} />
        <input type="hidden" name="deadline" value={deadline} />
        <input type="hidden" name="phone" value={phone} />
        <input type="hidden" name="time" value={time} />
      </Form>
    </Container>
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
