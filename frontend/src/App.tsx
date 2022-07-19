import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListProductsPage from './modules/Products/Pages/ListProductsPage';
import UpsertProductPage from './modules/Products/Pages/UpsertProductPage';
import { ReactNotifications } from 'react-notifications-component';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Provider store={store}>
    <ReactNotifications />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ListProductsPage /> } />
        <Route path="/products/page/:page" element={ <ListProductsPage /> } />
        <Route path="/products/upsert/:product_id" element={ <UpsertProductPage /> } />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
