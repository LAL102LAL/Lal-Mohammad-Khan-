import React  from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';


const CartList = ({ cartItems, removeFromCart, updateQuantity }) => {
 
  // Calculate total quantity and total price
  const totalQuantity = ()=> cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  const navigate = useNavigate();
  const MallOpen = () => {
    navigate('/Dashboard');
  };

  const Wallet =() =>{
    
        alert('Not Enough Balance, Please Upi On Lal Md Account');

    
  };


  const Payment =() =>{
    alert('ADD PAYMENT METHOD, CONTACT FROM DEVLOPER')
  };


  return (
    <> <div style={{ borderBottom: '2px solid #ccc', marginBottom: '20px', paddingBottom: '10px'}}>
    <h2  style={{ fontWeight: 'bolder', color: 'white', textAlign: 'center', backgroundColor: '#485e24', padding: '10px' }}>
    <FaWallet onClick={Wallet} style={{ fontSize: '40px', color: '#237be4f5', cursor: 'pointer', float:'right',marginTop:'20px',marginRight:'30px', textShadow: '2px 2px 4px #000'  }} />
    <FaShoppingBasket onClick={MallOpen} style={{ fontSize: '40px', color: 'White', cursor: 'pointer', float:'left',marginTop:'20px',marginLeft:'30px' }} />
      Your Shopping Cart on
      <span style={{ paddingLeft: '10px', margin: 0, color: '#a2ff00', fontWeight: 'light', fontSize: '50px', fontStyle: 'italic', textShadow: '2px 2px 4px #000' }}>
        Apne
      </span>
      <span style={{ margin: '5px', color: 'white', fontWeight: 'bolder', fontSize: '25px' }}>
        Shopping.com
      </span>
    </h2>
  </div>
    <div style={{backgroundColor:'white', marginBottom:'60px'}}>
     
      {cartItems.length === 0 ? (
        <p style={{textAlign:'center', color:'InactiveBorder'}}>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <div>
                <img style={{ width: '100px' }} src={item.image} alt={item.name} />
              </div>
              <div style={{ marginLeft: '20px', flex: '1' }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.name}</p>
                <p style={{  fontSize: '15px', fontWeight: 'bold', position:'absolute', right:'10px', marginTop:'50px'}} > &#8377;{item.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}  style={{ marginRight: '5px', width:'30px'  }}>-</button>
                  <button onClick={() => removeFromCart(item.id)} style={{ marginRight: '5px', width:'100px' }}>Delete</button>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ marginRight: '5px', width:'30px' }}>+</button>
                 
                  <span>Qty: {item.quantity}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* Display total quantity and total price */}
      <div style={{ marginTop: '20px', width:'100%', backgroundColor:'whitesmoke',display:'flex', position:'fixed', bottom:'0' }}>
        <p style={{}}><b>Total Quantity:</b> <span> {totalQuantity()}</span></p>
        <p style={{}} > <b>Total Price: </b> <span> &#8377;{totalPrice}</span> </p>

        
        <button onClick={Payment}  style={{
            display: totalQuantity ()===0 ? 'none':'block',
            position:'absolute', right: '0',
    marginTop: '20px',
    marginRight: '50px',
    width: '200px',
    height: '30px',
    borderRadius: '8px',
    backgroundColor: 'greenyellow',
    fontWeight: 'bold', }}>Proceed to Buy</button>
      </div>
     
    
    </div>
   
    </>
  );
};

export default CartList;
