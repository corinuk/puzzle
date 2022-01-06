import Header from "components/Header";
import Item from "components/Item";

function Home() {
  const array = [1, 2, 3, 4, 5];
  return (
    <div>
      <Header />
      {array.map((item, idx) => (
        <Item
          key={idx}
          menu="menu"
          place="place"
          prevPrice={100}
          saledPrice={70}
          // foodImg={}
        />
      ))}
    </div>
  );
}

export default Home;
