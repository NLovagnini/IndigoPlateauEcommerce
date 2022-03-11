import React from 'react';
import './OrderPopUp.css'
import { Link } from 'react-router-dom';

const OrderPopUp = (props) => {

  
  return (props.trigger)?(
  <div className='popUp'>
    <div className='popUp-inner'> 
      <div className='popUp-inner message'>
        <h2>Thank you so much !</h2>
        <p>Your order has been processed.</p>
      </div>
          <p className='cartTotal'>
            Total: ${props.cartTotal}
            </p>
          <p className='popUp-inner buyer'>
           <span className='buyerName'>{props.orderRef.buyer.firstName}&nbsp;
           {props.orderRef.buyer.lastName} </span> <br/>
           <span className='buyerPhone'> Phone number: {props.orderRef.buyer.phoneNumber} </span><br/>
           <span className='buyerEmail'> Email: {props.orderRef.buyer.email} </span> <br/>
            </p>
          <p className='popUp-inner id'>Order Id: {props.orderId}</p> 
      <Link to='/' className='finishLink'><button className='finishBtn' onClick={() => props.emptyCart()}>Return to the homepage</button></Link>
      {props.children}
    </div>
  </div>
  ) : '';
};

export default OrderPopUp;
