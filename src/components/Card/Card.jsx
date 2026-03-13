import { useState } from "react";
import { useOutletContext } from "react-router";

function Card({ imgUrl, title, id }) {
  console.log({ imgUrl, title, id });
  const [itemsOnTheCart, setItemsOnTheCart] = useOutletContext()[1];
  const [quantity, setQuantity] = useState(0);

  function handleInput(e) {
    const inputValue = +e.target.value;
    setQuantity(inputValue);
  }

  function handleAddItem(e) {
    e.preventDefault();
    if (quantity > 0) {
      const array = itemsOnTheCart.slice();

      //check if the item exist on the cart
      const index = array.findIndex((item) => item.id === id);
      // if exist, add the new quantity
      if (index >= 0) {
        array[index].quantity = array[index].quantity + quantity;
      }
      // else create a new item and add it to the cart
      else {
        const newItem = {
          id: id,
          imgUrl: imgUrl,
          title: title,
          quantity: quantity,
        };
        array.push(newItem);
      }
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
