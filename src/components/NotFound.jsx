import {Link} from 'react-router'

const NotFound = () => (
  <main className="page narrow">
    <h1 className="details-title">Page not found</h1>
    <p className="details-content">
      This address does not match any route. <Link to="/">Go to projects</Link>
    </p>
  </main>
)

export default NotFound
