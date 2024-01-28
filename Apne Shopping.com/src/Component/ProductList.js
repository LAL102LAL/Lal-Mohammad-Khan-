import React from 'react';
import './ProductList.css';






const ProductList = ({ addToCart, searchQuery }) => {


  


  const products = [
    { id: 1, name: 'ZEISS Batis 1.8/85 mm Telephoto Camera Lens for Sony E-Mount Mirrorless Cameras (Black)', price: 67900, image: 'product1.jpg' },
    { id: 2, name: 'HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built', price: 33900, image: 'product2.jpg' },
    { id: 3, name: 'Fire-Boltt Invincible Plus 1.43" AMOLED Display Smartwatch with Bluetooth Calling, TWS Connection, 300+ Sports Modes, 110 in-Built Watch Faces, 4GB Storage & AI Voice Assistant (Black SS)', price: 4008, image: 'product3.jpg' },
    { id: 4, name: 'GOVO GOSURROUND 945 | 120W Soundbar, 5.1 Channel Home Theatre with 5.25" subwoofer, Dual Rear Satellites, AUX, USB & Bluetooth, 3 Equalizer Modes, Stylish Remote & LED Display (Platinum Black)', price: 5499, image: 'product4.jpg' },
    
  ];

  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
<>

    
    <div className="product-list">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          {/* Render product components here */}
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
          </div>
          <div className="action-buttons">
            <div>Price: &#8377;{product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
     
    </div>

    </>
  );
};

export default ProductList;