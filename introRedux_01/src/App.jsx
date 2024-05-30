import {Provider} from 'redux'
import Product1 from './Components/Product1'
import Product2 from './Components/Product2'
import Cart from './Components/Cart'
import Store from './Components/Store'

function App() {

  return (
    <Provider store = {Store}>
      <Product1/>
      <Product2/>
      <Cart/>      
    </Provider>
  )
}

export default App
