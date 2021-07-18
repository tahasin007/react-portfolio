import './App.scss'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import {useState} from 'react'

function App() {
  const [navToggle, setNavToggle] = useState(false)
  const navClick = () => {
    setNavToggle(!navToggle)
  }
  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''} `}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolios' exact>
              <PortfolioPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
