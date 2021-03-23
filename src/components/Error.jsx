import './Error.scss';

export default function Error() {
  return (
    <div className="error-container">
      <h1 className="title">Error</h1>
      <img src="/images/404.png" alt="computer with a sign of 404 error" className="error-img"/>
      <h2 className="subtitle">Page Not Found</h2>
      <a href="/" className="button">Back to Home Page</a>
    </div>
  )
}