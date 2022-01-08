import Header from "components/Header";
import Item from "components/Item";
import { dbService } from "fb";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoods = async () => {
    const q = query(collection(dbService, "foods"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const foodObj = {
        ...doc.data(),
        id: doc.id,
      };
      setFoods((prev) =>
        [foodObj, ...prev].sort(function (a, b) {
          return b.createdAt - a.createdAt;
        })
      );
    });
    setLoading(false);
  };

  useEffect(() => {
    setFoods([]);
    getFoods();
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
