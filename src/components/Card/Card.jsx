import { useState } from "react";
import { useOutletContext } from "react-router";

function Card({ imgUrl, title }) {
  const [itemsOnTheCart, setItemsOnTheCart] = useOutletContext()[1];
  const [quantity, setQuantity] = useState(0);

  function handleInput(e) {
    setQuantity(e.target.value);
  }

  function handleAddItem(e) {
    e.preventDefault();
    if (quantity > 0) {
      const array = itemsOnTheCart.slice();
      const newItem = {
        id: crypto.randomUUID(),
        imgUrl: imgUrl,
        title: title,
        quantity: quantity,
      };
      array.push(newItem);
      setItemsOnTheCart(array);
    }
  }

  return (
    <>
      <div className="card" role="cartItem">
        <img src={imgUrl}></img>
        <p>{title}</p>
        <div className="card-user-input">
          <label>
            Quantities :
            <input
              type="number"
              value={quantity}
              min="0"
              max="50"
              onChange={(e) => handleInput(e)}
            />
          </label>
          <button onClick={(e) => handleAddItem(e)}>Add to the cart</button>
        </div>
      </div>
    </>
  );
}

export default Card;
