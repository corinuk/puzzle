import GoToPrevPage from "components/GoToPrevPage";
import { useState } from "react";
import styles from "routes/UploadPage.module.css";

function UploadPage() {
  const [menu, setMenu] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [saledPrice, setSaledPrice] = useState("");

  const { uploadForm } = styles;

  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onImageUpload = (event) => {
    const img = event.target.files[0];
    console.log(event.target.files);
    const formData = new FormData();
    formData.append("file", img);
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "menu") {
      setMenu(value);
    } else if (name === "place") {
      setPlace(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "saledPrice") {
      setSaledPrice(value);
    }
  };

  return (
    <div>
      <GoToPrevPage />
      <h1>UploadPage</h1>
      <form onSubmit={onSubmit} className={uploadForm}>
        <input
          type="file"
          accept="image/*"
          name="foodImg"
          onChange={onImageUpload}
        />
        <input
          name="menu"
          value={menu}
          onChange={onChange}
          type="text"
          placeholder="메뉴 이름"
        />
        <input
          name="place"
          value={place}
          onChange={onChange}
          type="text"
          placeholder="가게 이름"
        />
        <input
          name="price"
          value={price}
          onChange={onChange}
          type="number"
          placeholder="원래 가격"
        />
        <input
          name="saledPrice"
          value={saledPrice}
          onChange={onChange}
          type="number"
          placeholder="할인된 가격"
        />
        <input type="submit" value="올리기" />
      </form>
    </div>
  );
}

export default UploadPage;
