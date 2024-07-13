import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Admin from './components/Admin'
import Product from './components/Admin/Products'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import Customers from './components/Admin/Customers'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/sattings'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Products from './components/Products'
import Category from './components/Category'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Category/>}/>



        <Route path='/admin'>
          <Route path='products' element={<Product/>} />
          <Route path='orders' element={<Orders/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='payments' element={<Payments/>}/>
          <Route path='settings' element={<Settings/>}/>
          {/* <Route path='auth' element={<Admin/>}/> */}
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App