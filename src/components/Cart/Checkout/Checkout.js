import React, {useContext, useState} from 'react';
import { CartContext } from '../../../context/cartContext';
import { collection, addDoc} from 'firebase/firestore';
import db from '../../../firebase/firebase'
import { serverTimestamp } from 'firebase/firestore';
import 'firebase/firestore'
import OrderPopUp from '../OrderPopUp/OrderPopUp';
import FormInput from './FormInput';
import './Checkout.css'


const Checkout = () => {


    
  const [userValues, setUserValues] = useState({
    firstName:'',
    lastName:'',
    phoneNumber: '',
    email: '',
    emailConfirm: '',
  });

  const formInputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      errorMsg:'First name may only contain letters!',
      label: 'First Name',
      pattern: '^[A-Za-z]{2,25}$',
      required: true,
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      errorMsg: 'Last name may only contain letters!',
      label: 'Last Name',
      pattern: '^[A-Za-z]{2,25}$',
      required: true,
    },
    {
      id: 3,
      name: 'phoneNumber',
      type: 'text',
      placeholder: 'Phone Number',
      errorMsg: 'Not a valid phone number!',
      label: 'Phone Number',
      pattern: '^[0-9]{6,15}$',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMsg: 'Not a valid Email address!',
      label: 'Email',
      pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$", // eslint-disable-line
      required: true,
    },
    {
      id: 5,
      name: 'emailConfirm',
      type: 'text ',
      placeholder: 'Confirm Email',
      errorMsg: 'Emails do not match!',
      label: 'Confirm Email',
      pattern: userValues.email,
      required: true,
    },

  ]

    const [trigger, setTrigger] = useState(false);
    const [orderRef, setOrderRef] = useState()
    const [orderId, setOrderId] = useState('')

    const {cartTotal, itemsCart, setItemsCart} = useContext(CartContext)
    


    const finishOrder = async (e) => {
        (e).preventDefault();
        const newOrder = {
            buyer: {
                firstName: userValues.firstName,
                lastName: userValues.lastName,
                phoneNumber: userValues.phoneNumber,
                email: userValues.email,
            },
            items: itemsCart,
            total: cartTotal,
          }
        const docRef = await addDoc(collection(db, 'orders'), {...newOrder, timestamp: serverTimestamp()})
        setOrderRef(newOrder)
        setOrderId(docRef.id)
        setTrigger(true)
    }
    
    const emptyCart = () =>{
      setItemsCart([])
    }
    
  

    const handleChange = (e) => {
      setUserValues({...userValues, [e.target.name]: e.target.value})
    }

    

  return <div>
      <form className='checkoutForm' onSubmit={(e) => finishOrder(e)}>
        {formInputs.map((input) => (
          <FormInput key={input.id} {...input} value={userValues[input.name]} onChange={handleChange}/>
        ))}
        <button type='submit' className='checkoutBtn'>
         CHECK OUT!
        </button>
      </form>
      
    <OrderPopUp trigger={trigger} 
                orderRef={orderRef}
                orderId={orderId}
                itemsCart={itemsCart} 
                cartTotal={cartTotal} 
                emptyCart={emptyCart}
                />
  </div>;
};

export default Checkout;
