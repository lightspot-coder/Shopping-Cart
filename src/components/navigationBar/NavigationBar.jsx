import { Link } from "react-router";

function NavigationBar({ numberOfItemsOnTheCart }) {
  return (
    <>
      <nav className="navigation-bar">
        <p>Shopping cart</p>
        <ul>
          <li>
            <Link to="/home-page">Home</Link>
          </li>
          <li>
            <Link to="/store-page">Store</Link>
          </li>
          <li>
            <Link to="/cart-page">
              Cart
              {numberOfItemsOnTheCart > 0 ? `(${numberOfItemsOnTheCart})` : ""}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationBar;
