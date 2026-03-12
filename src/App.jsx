import { useState } from "react";
import { Outlet } from "react-router";
import NavigationBar from "./components/navigationBar/NavigationBar";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("user");
  const [itemsOnTheCart, setItemsOnTheCart] = useState([]);

  return (
    <>
      <NavigationBar
        numberOfItemsOnTheCart={itemsOnTheCart.reduce((total, currentItem) => {
          return +currentItem.quantity + total;
        }, 0)}
      ></NavigationBar>

      <div className="container">
        {
          <Outlet
            context={[
              [userName, setUserName],
              [itemsOnTheCart, setItemsOnTheCart],
            ]}
          />
        }
      </div>
    </>
  );
}

export default App;
