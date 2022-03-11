import React, { useState } from 'react';
import './FormInput.css'

const FormInput = ({label, errorMsg, onChange, ...inputProps}) => {
    
    const [focus, setFocus] = useState(false); 

    const handleFocus = (e) =>{
        setFocus(true);
    }
    

  return <div className='formInput'>
      <label>{label}</label>
      <input className='checkoutInput' 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={() => inputProps.name ==='emailConfirm' && setFocus(true)}
        focus={focus.toString()}
        {...inputProps} />
      <span className='errorMsg'>{errorMsg}</span>
  </div>;
};

export default FormInput;
