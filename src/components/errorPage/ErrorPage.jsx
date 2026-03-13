import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="error-page-container">
      <h1>Shopping cart</h1>
      <h2>This route doesn't exist!</h2>
      <Link to="/" role="link">
        Click here to go back to the home page
      </Link>
    </div>
  );
}

export default ErrorPage;
