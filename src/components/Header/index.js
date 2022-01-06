import './index.css'

const Header = () => {
  console.log('Header')
  return (
    <div className="header-container">
      <img
        className="website-logo"
        src="https://res.cloudinary.com/srm-btech/image/upload/v1641427233/cooltext401550660311521_qtcqoh.png"
        alt="website logo"
      />
      <div className="nav-tabs-container">
        <p className="nav-tabs">Home</p>
        <p className="nav-tabs">Post</p>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Header
