import { useRouteError, Link } from "react-router-dom";
import "./ErrorPage.css"; // Create this CSS file

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <div className="error-background-effects">
        <div className="error-pulse-circle error-circle-1"></div>
        <div className="error-pulse-circle error-circle-2"></div>
      </div>

      <div className="error-content">
        <div className="error-emoji">😱</div>
        
        <h1>Yikes! Something broke</h1>
        <p className="error-subtitle">Our team of digital janitors has been alerted</p>

        <div className="error-message">
          <code>{error.statusText || error.message}</code>
        </div>

        <div className="error-actions">
          <Link to="/" className="error-button error-home-button">
            ← Return Home
          </Link>
          <button className="error-button error-retry-button">
            Retry
          </button>
        </div>

        <p className="error-support">
          Still stuck? Email{" "}
          <a href="mailto:support@example.com">support@example.com</a>
        </p>
      </div>
    </div>
  );
}