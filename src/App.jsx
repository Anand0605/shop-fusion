import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Admin from './components/Admin'
import Product from './components/Admin/Product'
import Orders from './components/Admin/Orders'
import NotFound from './components/NotFound'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin'>
          <Route path='products' element={<Product/>} />
          <Route path='orders' element={<Orders/>}/>
          {/* <Route path='payments' element={<Payments/>}/> */}
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App