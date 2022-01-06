import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import './App.css'

const App = () => {
  console.log('App')
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
