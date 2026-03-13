import { useOutletContext } from "react-router";

function CartPage() {
  const [userName] = useOutletContext()[0];
  const [itemsOnTheCart, setItemsOnTheCart] = useOutletContext()[1];

  function handleInput(e, index) {
    let array = itemsOnTheCart.slice();
    array[index].quantity = +e.target.value;
    setItemsOnTheCart(array);
  }

  function handleDeleteItem(e, id) {
    e.preventDefault();
    let array = itemsOnTheCart.filter((element) => element.id != id);
    setItemsOnTheCart(array);
  }

  function createElement(item, index) {
    return (
      <div className="cart-item-container" key={item.id}>
        <div>
          <img src={item.imgUrl}></img>
          <p>{item.title}</p>
        </div>
        <div className="cart-item-user-input-container">
          <label>
            quantity :
            <input
              type="number"
              min="0"
              max="50"
              value={item.quantity}
              onChange={(e) => handleInput(e, index)}
            />
          </label>
          <button
            onClick={(e) => {
              handleDeleteItem(e, item.id);
            }}
          >
            delete item
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1>This is the {userName}'s Cart</h1>
      <div className="cart-list-container">
        {itemsOnTheCart.map((item, index) => createElement(item, index))}
      </div>
    </div>
  );
}

export default CartPage;
