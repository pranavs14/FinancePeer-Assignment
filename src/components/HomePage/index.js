import Header from '../Header'
import './index.css'

const HomePage = () => {
  console.log('HomePage')
  return (
    <div className="home-container">
      <Header />
      <div className="home-content">
        <h1 className="home-header">Welcome, User</h1>
      </div>
    </div>
  )
}

export default HomePage
