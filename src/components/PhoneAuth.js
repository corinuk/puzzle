import styles from "components/PhoneAuth.module.css";
import { useState } from "react";
// import { config, Group } from "coolsms-node-sdk";

function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [authNum, setAuthNum] = useState("");
  const [clicked, setClicked] = useState(false);
  const { phoneNumClass, submitBtn, authNumClass, checkNum } = styles;
  const onClick = (event) => {
    setClicked(true);
    console.dir(event.target.parentNode.children[1].value);
    // const apiKey = "NCSJDI65SYAQKH0E";
    // const apiSecret = "UONJ7IUAZGTWEA6MGHQEQJ9SUVGPUO4M";
    // config.init({ apiKey, apiSecret });
    // async function send(params = {}) {
    //   try {
    //     const response = await Group.sendSimpleMessage(params);
    //     console.log(response);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // const params = {
    //   text: "[쿨에스엠에스 테스트] hello world!", // 문자 내용
    //   type: "SMS", // 발송할 메시지 타입 (SMS, LMS, MMS, ATA, CTA)
    //   to: "01087145915", // 수신번호 (받는이)
    //   from: "01087145915", // 발신번호 (보내는이)
    // };
    // send(params);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  // 인증을 위해 발급받은 본인의 API Key를 사용합니다.

  const onChange = (event) => {
    if (event.target.id === "phone") {
      const regex = /^[0-9\b -]{0,11}$/;
      if (regex.test(event.target.value)) {
        setPhone(event.target.value);
        setClicked(false);
      } else {
        console.log("no!!");
      }
    } else if (event.target.id === "authNum") {
      setAuthNum(event.target.value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor="phone">
          휴대폰 번호를 입력해주세요 ( - 제외 )
          <br />
          <input
            required
            id="phone"
            type="number"
            placeholder="휴대폰 번호를 입력해주세요"
            value={phone}
            className={phoneNumClass}
            onChange={onChange}
          />
          <input
            type="button"
            className={submitBtn}
            value="인증하기"
            onClick={onClick}
          />
          <br />
          {clicked && phone.length === 11 && (
            <span>인증 메시지 발송됨. 조금만 기다리3</span>
          )}
          {clicked &&
            (phone.length === 11 || (
              <span className={checkNum}>휴대폰 번호를 확인해주세요</span>
            ))}
        </label>
      </p>
      <p>
        <label htmlFor="phone">
          인증번호 6자리를 입력해주세요
          <br />
          <input
            required
            id="authNum"
            type="number"
            placeholder="인증번호를 입력해주세요"
            value={authNum}
            className={authNumClass}
            onChange={onChange}
          />
          <input
            type="submit"
            className={submitBtn}
            value="인증번호 확인"
            onSubmit={onSubmit}
          />
        </label>
      </p>
    </form>
  );
}

export default PhoneAuth;
