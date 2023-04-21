import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Single } from './pages/Single';
import { Admin } from './pages/Admin';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Orange t-shirt',
      price: 30,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 4,
      img: 'img/product1.jpg'
    },
    {
      id: 2,
      title: 'Traveller bag',
      price: 80,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 5,
      img: 'img/product2.jpg'
    },
    {
      id: 3,
      title: 'Sunglasses',
      price: 50,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 7,
      img: 'img/product3.jpg'
    },
    {
      id: 4,
      title: 'Woman watch',
      price: 120,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 8,
      img: 'img/product4.jpg'
    },
    {
      id: 5,
      title: 'Summer hat',
      price: 40,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 5,
      img: 'img/product5.jpg'
    },
    {
      id: 6,
      title: 'Roller skates',
      price: 350,
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      quantity: 9,
      img: 'img/product6.jpg'
    },
  ]);

const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home items={items} cart={cart} setCart={setCart} />} />
        <Route path="/single" element={<Single items={items} cart={cart} setCart={setCart} />}>
          <Route path=":singleId" element={<Single />} />
        </Route>
        <Route path="/admin" element={<Admin items={items} setItems={setItems} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
