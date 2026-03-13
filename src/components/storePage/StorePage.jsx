import { useEffect, useState } from "react";
import Card from "../Card/Card";

async function getData(jsonData) {
  try {
    let data = await jsonData.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(`getData(): Error ${error}`);
    return null;
  }
}

async function getUrlFromAPI() {
  try {
    let response = await fetch("https://fakestoreapi.com/products/");
    if (response.ok) {
      let imgUrl = await getData(response);
      return imgUrl;
    } else {
      throw new TypeError("fetch error: bad location");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

function StorePage() {
  const [arrayOfItems, setArrayOfImgURL] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let data = [];
      console.log("fetching....");
      data = await getUrlFromAPI();
      setArrayOfImgURL(data);
      console.log(data);
      setLoading(false);
    }
    fetchData();

    return () => setArrayOfImgURL(null);
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <h1>This is the Store Page</h1>
      <div className="grid-cards-container">
        {arrayOfItems.map((item, index) => {
          return (
            <Card
              imgUrl={item.image}
              title={item.title}
              id={item.id}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default StorePage;
