import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import CartWidgetContext from './context/CartWidgetContext';
import { CartWidgetContextProvider } from './context/CartWidgetContext'

function App() {
  
  return (
    <CartWidgetContextProvider>
      <>
        <div>
          <Cart></Cart>
        </div>
        <div>
          <ItemListContainer></ItemListContainer>
        </div>
      </>
    </CartWidgetContextProvider>
  );
}

export default App;
