import NavBar from '../components/Navbar'
import MenuBar from '../components/MenuBar'

const NotFound = () => (
  <div>
    <NavBar />
    <MenuBar />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="notFound"
      />
    </div>
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found.</p>
  </div>
)

export default NotFound
