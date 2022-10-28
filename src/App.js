import './App.css';
import CheckOut from './components/CheckOut';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { CartWidgetContextProvider } from './context/CartWidgetContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';
import User from './components/User';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  
  return (
    <UserContextProvider>
    <CartWidgetContextProvider>
      <>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path={'/'} element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path={'/pedidos'} element={<CheckOut></CheckOut>}></Route>
            <Route path={'/login'} element={<User></User>}></Route>
            <Route path={'/productos/:nombre'} element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </CartWidgetContextProvider>
    </UserContextProvider>
  );
}

export default App;
