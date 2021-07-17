import './App.scss'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import {Switch, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage fron './pages/ContactPage'

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
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
            <Route path='/portfolio' exact>
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
