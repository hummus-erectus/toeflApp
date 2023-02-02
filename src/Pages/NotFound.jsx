import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main>
        <div className='page-container'>
          <h1>Oops! Page not found</h1>
          <Link to='/' className="notfound-home-link">Return to Home</Link>
        </div>
    </main>
  )
}

export default NotFound