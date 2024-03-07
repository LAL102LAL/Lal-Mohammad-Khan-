import React from 'react';
import './ProductList.css';






const ProductList = ({ addToCart, searchQuery }) => {


  


  const products = [
    { id: 1, name: 'ZEISS Batis 1.8/85 mm Telephoto Camera Lens for Sony E-Mount Mirrorless Cameras (Black)', price: 67900, image: 'product1.jpg' },
    { id: 2, name: 'HP [Smartchoice 14s, 11th Gen Intel Core i3-1125G4, 8GB RAM/256GB SSD 14"(35.6 cm) Micro-Edge, Anti-Glare, FHD/Alexa Built', price: 33900, image: 'product2.jpg' },
    { id: 3, name: 'Fire-Boltt Invincible Plus 1.43" AMOLED Display Smartwatch with Bluetooth Calling, TWS Connection, 300+ Sports Modes, 110 in-Built Watch Faces, 4GB Storage & AI Voice Assistant (Black SS)', price: 4008, image: 'product3.jpg' },
    { id: 4, name: 'GOVO GOSURROUND 945 | 120W Soundbar, 5.1 Channel Home Theatre with 5.25" subwoofer, Dual Rear Satellites, AUX, USB & Bluetooth, 3 Equalizer Modes, Stylish Remote & LED Display (Platinum Black)', price: 5499, image: 'product4.jpg' },
    { id: 5, name :'Cromptons Fresh-MIX, Juicer Mixer Grinder, silver solid steel with carbon black cap ', price: 3500, image: 'product5.jpg'},
    { id: 6, name: 'MANTIS Stainless Steel 700 ml Sipper Bottle ', price:327, image:'product6.jpg'},
    { id: 7, name: 'FRESH UP 8-inch Medium Firm Single Size 3-Zone Orthopedic Pocket Spring Mattress with Certified AntiViral Protection ', price:6767, image:'product7.jpg'},
    { id: 8, name: 'Oshee Store M19 TWS Wireless Earphone Touch Wireless Headset LED Digital Display Earbuds Sports Headphone.', price:598, image:'product8.jpg'},

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