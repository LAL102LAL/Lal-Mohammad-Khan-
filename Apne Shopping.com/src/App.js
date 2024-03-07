import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Component/Register'; 
 import Login from './Component/Login'
import NavBar from './Component/NavBar';
import CartList from './Component/CartList'




function App() {


  
  const [cartItems, setCartItems] = useState([]);
  const totalQuantity = ()=> cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to add items to the cart
  const addToCart = (product) => {
    console.log('add your product', product)
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };


  // Function for update quantity 
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };


  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };


  

 
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Dashboard" element={<NavBar  totalQuantity={totalQuantity} addToCart={addToCart}/>} />
        <Route path="/CartList" element={<CartList cartItems={cartItems}  updateQuantity={updateQuantity} removeFromCart={removeFromCart}  />} />
       
        
      
      </Routes>
     
      </Router>
     
    
    </>
  );
}


export default App;
