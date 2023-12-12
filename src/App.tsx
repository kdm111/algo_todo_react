import React, {useEffect} from 'react'
import { BrowserRouter as Router, useRoutes, useLocation } from 'react-router-dom'

import routes from './routes/index'

const AppRoutes = () => {
  const element = useRoutes(routes);
  const location = useLocation()
  useEffect(() => {
  }, [location.pathname])
  return element;
}

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App;