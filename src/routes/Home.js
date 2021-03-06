import Header from "components/Header";
import Item from "components/Item";
import styles from "routes/Home.module.css";
import { dbService } from "fb";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { alartMessages } = styles;

  useEffect(() => {
    setFoods([]);
    onSnapshot(
      query(collection(dbService, "foods"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const foodArr = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoods(foodArr);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      {(function () {
        if (loading) {
          return <h3 className={alartMessages}>잠시만 기다려주세요...</h3>;
        } else if (foods.length === 0) {
          return <h3 className={alartMessages}>할인 중인 상품이 없습니다.</h3>;
        } else {
          return foods.map(
            ({
              id,
              menu,
              place,
              address,
              price,
              saledPrice,
              count,
              ampm,
              deadlineHours,
              deadlineMinutes,
              createdAt,
              fileURL,
            }) => (
              <Item
                id={id}
                key={id}
                menu={menu}
                place={place}
                address={address}
                prevPrice={Number(price)}
                saledPrice={Number(saledPrice)}
                count={Number(count)}
                ampm={ampm}
                deadlineHours={deadlineHours}
                deadlineMinutes={deadlineMinutes}
                createdAt={createdAt}
                fileURL={fileURL}
              />
            )
          );
        }
      })()}
    </div>
  );
}

export default Home;
