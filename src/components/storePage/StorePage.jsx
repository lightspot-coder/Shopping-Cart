import { useEffect, useState } from "react";
import Card from "../Card/Card";

async function getData(jsonData) {
  try {
    let data = await jsonData.json();
    console.log(data);
    let imgURL = data.image;
    let imgTitle = data.title;
    //console.log(imgURL);
    return [imgURL, imgTitle];
  } catch (error) {
    console.log(`getData(): Error ${error}`);
    return null;
  }
}

async function getUrlFromAPI(index) {
  try {
    let response = await fetch("https://fakestoreapi.com/products/" + index);
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
  const [arrayOfImgURL, setArrayOfImgURL] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let arrayOfData = [];
      console.log("fetching....");
      for (let i = 0; i < 6; i++) {
        arrayOfData[i] = await getUrlFromAPI(i + 1);
      }
      setArrayOfImgURL(arrayOfData);
      //console.log(arrayOfImgURL);
      setLoading(false);
    }
    fetchData();

    return () => setArrayOfImgURL(null);
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <h1>This is the Store Page</h1>
      <div className="grid-cards">
        {arrayOfImgURL.map(([url, title], index) => {
          return <Card imgUrl={url} title={title} key={index} />;
        })}
      </div>
    </>
  );
}

export default StorePage;
