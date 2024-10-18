import {Header} from '../../../modules/header'
import { Footer } from '../../../modules/footer'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default SharedLayout