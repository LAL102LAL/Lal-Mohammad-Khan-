import React, {useState, useEffect} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
 import ProductList from './ProductList';
 import { useNavigate, useLocation } from 'react-router-dom';






const NavBar = ({addToCart, totalQuantity}) => {

  const location = useLocation()

     
    const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const CartOpen = () => {
    navigate('/CartList');
  };

  const [isElementVisible, setIsElementVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the element after 3000 milliseconds (3 seconds)
    const timeoutId = setTimeout(() => {
      setIsElementVisible(false);
    }, 10000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); 


 
 

  return (
    <>
 
      <nav style={{ backgroundColor: '#007bff', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position:'fixed', top:'0', width:'100%' }}>
        {/* Left side - Website Name */}
        <div>
          <h2 style={{ margin: 0 }}>
            <span style={{ margin: 0, color: '#a2ff00', fontWeight: 'light', fontSize: '50px', fontStyle: 'italic', textShadow: '2px 2px 4px #000' }}>Apne</span>
            <span style={{ margin: '5px', color: 'white', fontWeight: 'bolder', fontSize: '25px' }}>Shopping.com</span>
          </h2>
        </div>

        {/* Middle - Search Bar and Button */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search..."
             onChange={handleSearchChange}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '8px', width: '400px' }}
          />
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Search
          </button>
        </div>

        {/* Right - Cart Icon */}
        <div style={{ marginRight: '30px'}}>
        <button onClick={CartOpen}   style={{border:'none', backgroundColor:'transparent', padding:'0', margin:'0'}}>
            <FaShoppingCart style={{ fontSize: '45px', color: '#fff', cursor: 'pointer',zIndex:'2'  }} />
            </button>
            <sup ><b style={{marginRight:'25px', fontWeight:'600', marginTop:'5px', fontSize:'2rem', zIndex:'1' }}>{totalQuantity()}</b></sup>
        </div>
      </nav>

        {isElementVisible && location.state && location.state.id &&  (   <p  style={{fontSize:'2rem', color:'whitesmoke', marginTop:'80px', display:'flex', justifyContent:'center'}}> WELCOME, Mr.  {location.state.id} </p>)}
     
      {/* ProductList component with addToCart and searchQuery */}
       <ProductList addToCart={addToCart}  searchQuery={searchQuery} /> 
    
    </>
  );
};

export default NavBar;
