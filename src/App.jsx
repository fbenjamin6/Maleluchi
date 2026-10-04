import { Route } from 'wouter'
import { HomePage } from './pages/HomePage'
import { ServiciosPage } from './pages/ServicesPage'

function App() {
  return (
    <>
      <Route path={'/'}>
        <HomePage />
      </Route>
      <Route path={'/servicios'}>
        <ServiciosPage />
      </Route>
    </>
  )
}

export default App
