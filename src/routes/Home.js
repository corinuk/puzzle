import Header from "components/Header";
import Item from "components/Item";
import { dbService } from "fb";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

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
          return <h3>잠시만 기다려주세요...</h3>;
        } else {
          return foods.map(
            ({ id, menu, place, address, price, saledPrice }) => (
              <Item
                key={id}
                menu={menu}
                place={place}
                address={address}
                prevPrice={Number(price)}
                saledPrice={Number(saledPrice)}
                // foodImg={}
              />
            )
          );
        }
      })()}
    </div>
  );
}

export default Home;
