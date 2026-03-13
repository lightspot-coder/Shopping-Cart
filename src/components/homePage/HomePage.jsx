import { useState } from "react";
import NavigationBar from "../navigationBar/NavigationBar";
import { useOutletContext } from "react-router";

function HomePage() {
  const [userName, setUserName] = useOutletContext()[0];
  const [displayInput, setDisplayInput] = useState(false);

  function handleButtons(e) {
    e.preventDefault();
    if (displayInput) {
      setDisplayInput(false);
      return;
    }
    setDisplayInput(true);
  }
  function handleInputNameOnChange(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="home-page-container">
      <h1>This is the Home Page</h1>
      <p>Hi {userName}</p>

      {displayInput ? (
        <div>
          <input
            role="inputName"
            value={userName}
            onChange={(e) => handleInputNameOnChange(e)}
          ></input>
          <button onClick={(e) => handleButtons(e)}>Confirm</button>
        </div>
      ) : (
        <button onClick={(e) => handleButtons(e)}>Edit name</button>
      )}
    </div>
  );
}

export default HomePage;
