import './App.scss'
import Header from './modules/header/Header'
import { MedicinePage } from './pages/MedicinePage'
// import { MedicinePage } from './pages/MedicinePage'
// import {LoginPage} from './pages/LoginPage'
import { ShopPage } from './pages/ShopPage'

function App() {

  return (
    <>
    <Header/>
     {/* <LoginPage/> */}
     {/* <ShopPage/> */}
     <MedicinePage/>
    </>
  )
}

export default App
